"use client";

import { useRef, useCallback, useEffect, useState } from 'react';

// Helper to check if the effect should run
function supportsSkimmer(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for feature flag
  const isEnabled = document.body.getAttribute('data-skimmer-enabled') === 'true';
  if (!isEnabled) return false;
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return false;
  
  return true;
}

interface Speck {
  x: number;
  y: number;
  size: number;
  opacity: number;
  captured: boolean;
  capturedAtX?: number;
  fadeStartX?: number;
  // New properties for particle variation
  vx?: number; // horizontal drift velocity
  vy?: number; // vertical drift velocity
  color?: string; // particle color variation
  weight?: number; // affects fall speed
}

// Sweep configuration for each pass
interface SweepConfig {
  duration: number;
  pauseAfter: number;
  spawnRate: number;
  particlesPerSpawnMin: number;
  particlesPerSpawnMax: number;
  particleMinSize: number;
  particleMaxSize: number;
  lineWidth: number;
  lineOpacity: number;
  lineGlowIntensity: number;
  spawnAheadMin: number;
  spawnAheadMax: number;
  particleOpacityMin: number;
  particleOpacityMax: number;
  particleDrift: boolean;
  particleColorVariation: boolean;
  sweepType: 'quick-light' | 'thorough' | 'standard' | 'power-wash' | 'gentle';
  direction: 'left-to-right' | 'right-to-left';
}

export default function SubPixelSkimmer() {
  const layerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const skimmerBarRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const specksRef = useRef<Speck[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Animation state
  const [isActive, setIsActive] = useState(false);
  const isSweepingRef = useRef(false);
  const sweepStartTimeRef = useRef<number>(0);
  const currentPositionRef = useRef<number>(-1);
  
  // Current sweep configuration
  const sweepConfigRef = useRef<SweepConfig | null>(null);
  
  // Base timing constants
  const INITIAL_DELAY = 2000; // 2 seconds after mount
  const CAPTURE_RIDE_DISTANCE = 0.08; // 8% of container width
  
  // Generate random value between min and max
  const randomRange = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };
  
  // Generate a random sweep configuration
  const generateSweepConfig = (): SweepConfig => {
    // Randomly select sweep type
    const sweepTypes: SweepConfig['sweepType'][] = ['quick-light', 'thorough', 'standard', 'power-wash', 'gentle'];
    const sweepType = sweepTypes[Math.floor(Math.random() * sweepTypes.length)];
    
    // Base configuration
    let config: SweepConfig = {
      duration: randomRange(6000, 14000),
      pauseAfter: randomRange(3000, 10000),
      spawnRate: randomRange(0.6, 0.95),
      particlesPerSpawnMin: 1,
      particlesPerSpawnMax: 10,
      particleMinSize: 1,
      particleMaxSize: 7,
      lineWidth: randomRange(2, 5),
      lineOpacity: randomRange(0.3, 0.7),
      lineGlowIntensity: randomRange(0.3, 0.6),
      spawnAheadMin: randomRange(20, 50),
      spawnAheadMax: randomRange(80, 150),
      particleOpacityMin: 0.5,
      particleOpacityMax: 1.0,
      particleDrift: Math.random() > 0.3, // 70% chance of drift
      particleColorVariation: Math.random() > 0.4, // 60% chance of color variation
      sweepType: sweepType,
      direction: Math.random() > 0.8 ? 'right-to-left' : 'left-to-right', // 20% chance of reverse
    };
    
    // Adjust based on sweep type
    switch (sweepType) {
      case 'quick-light':
        config.duration = randomRange(6000, 8000);
        config.particlesPerSpawnMin = 1;
        config.particlesPerSpawnMax = 4;
        config.particleMinSize = 1;
        config.particleMaxSize = 3;
        config.lineWidth = randomRange(2, 3);
        config.spawnRate = randomRange(0.4, 0.6);
        break;
        
      case 'thorough':
        config.duration = randomRange(12000, 14000);
        config.particlesPerSpawnMin = 5;
        config.particlesPerSpawnMax = 10;
        config.particleMinSize = 3;
        config.particleMaxSize = 7;
        config.lineWidth = randomRange(4, 5);
        config.lineOpacity = randomRange(0.5, 0.7);
        config.spawnRate = randomRange(0.8, 0.95);
        break;
        
      case 'power-wash':
        config.duration = randomRange(6000, 9000);
        config.lineWidth = 5;
        config.lineOpacity = 0.7;
        config.lineGlowIntensity = 0.6;
        config.particleDrift = false; // Power wash captures instantly
        break;
        
      case 'gentle':
        config.duration = randomRange(10000, 12000);
        config.particlesPerSpawnMin = 1;
        config.particlesPerSpawnMax = 5;
        config.particleMinSize = 1;
        config.particleMaxSize = 4;
        config.lineWidth = 2;
        config.lineOpacity = randomRange(0.3, 0.4);
        config.particleDrift = true;
        break;
        
      // 'standard' uses the default random values
    }
    
    return config;
  };

  // Debug logging
  useEffect(() => {
    console.log('[SubPixelSkimmer] Component mounted, supports skimmer:', supportsSkimmer());
  }, []);

  const initCanvas = useCallback(() => {
    if (!canvasRef.current || !layerRef.current) return false;
    
    const canvas = canvasRef.current;
    const container = layerRef.current;
    const dpr = window.devicePixelRatio || 1;
    
    // Get container dimensions
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Validate dimensions
    if (width <= 0 || height <= 0) return false;
    
    // Set canvas size to match container
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    // Scale canvas back down using CSS
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    // Scale context to match device pixel ratio
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      return true;
    }
    
    return false;
  }, []);

  // Generate particle color variation
  const generateParticleColor = (config: SweepConfig): string => {
    if (!config.particleColorVariation) {
      return 'rgba(24, 185, 232'; // Base pool-blue (alpha added later)
    }
    
    // Slight variations in hue and saturation
    const hueShift = randomRange(-10, 10);
    const saturationMultiplier = randomRange(0.8, 1.2);
    const lightnessMultiplier = randomRange(0.9, 1.1);
    
    // Base color in HSL approximately: hsl(194, 83%, 50%)
    const h = Math.max(0, Math.min(360, 194 + hueShift));
    const s = Math.max(0, Math.min(100, 83 * saturationMultiplier));
    const l = Math.max(0, Math.min(100, 50 * lightnessMultiplier));
    
    // Convert HSL to RGB (simplified conversion)
    const hslToRgb = (h: number, s: number, l: number): [number, number, number] => {
      s /= 100;
      l /= 100;
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = l - c / 2;
      let r = 0, g = 0, b = 0;
      
      if (h < 60) { r = c; g = x; b = 0; }
      else if (h < 120) { r = x; g = c; b = 0; }
      else if (h < 180) { r = 0; g = c; b = x; }
      else if (h < 240) { r = 0; g = x; b = c; }
      else if (h < 300) { r = x; g = 0; b = c; }
      else { r = c; g = 0; b = x; }
      
      return [
        Math.round((r + m) * 255),
        Math.round((g + m) * 255),
        Math.round((b + m) * 255)
      ];
    };
    
    const [r, g, b] = hslToRgb(h, s, l);
    return `rgba(${r}, ${g}, ${b}`;
  };

  const spawnSpecks = useCallback((skimmerX: number, containerWidth: number, containerHeight: number) => {
    const config = sweepConfigRef.current;
    if (!config) return;
    
    // Check bounds based on direction
    const inBounds = config.direction === 'right-to-left'
      ? skimmerX > 100 && skimmerX <= containerWidth
      : skimmerX >= 0 && skimmerX < containerWidth - 100;
    
    if (Math.random() < config.spawnRate && inBounds) {
      const numSpecks = Math.floor(randomRange(config.particlesPerSpawnMin, config.particlesPerSpawnMax + 1));
      
      for (let i = 0; i < numSpecks; i++) {
        const size = randomRange(config.particleMinSize, config.particleMaxSize);
        const opacity = randomRange(config.particleOpacityMin, config.particleOpacityMax);
        
        // Calculate spawn position based on direction
        let spawnX: number;
        if (config.direction === 'right-to-left') {
          // Spawn to the left of the skimmer (in front of its path)
          spawnX = skimmerX - randomRange(config.spawnAheadMin, config.spawnAheadMax);
        } else {
          // Spawn to the right of the skimmer (in front of its path)
          spawnX = skimmerX + randomRange(config.spawnAheadMin, config.spawnAheadMax);
        }
        
        const speck: Speck = {
          x: spawnX,
          y: randomRange(40, containerHeight - 40), // Keep away from edges
          size: size,
          opacity: opacity,
          captured: false,
          color: generateParticleColor(config),
          weight: config.particleDrift ? randomRange(0.5, 1.5) : 1,
          vx: config.particleDrift ? randomRange(-0.5, 0.5) : 0,
          vy: config.particleDrift ? randomRange(0, 0.3) : 0,
        };
        
        // Only add speck if it's within bounds
        if (speck.x >= -config.spawnAheadMax && speck.x < containerWidth + config.spawnAheadMax) {
          specksRef.current.push(speck);
        }
      }
    }
  }, []);

  const animate = useCallback(() => {
    if (!canvasRef.current || !skimmerBarRef.current || !layerRef.current) {
      // Try to reinitialize if refs are lost
      if (isSweepingRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
      return;
    }
    
    const config = sweepConfigRef.current;
    if (!config) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const container = layerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    
    // Calculate elapsed time and progress
    const currentTime = Date.now();
    const elapsed = currentTime - sweepStartTimeRef.current;
    const progress = Math.min(elapsed / config.duration, 1);
    
    // Calculate skimmer position based on direction
    const totalDistance = containerWidth + 200; // Extra distance to ensure complete sweep
    let skimmerX: number;
    
    if (config.direction === 'right-to-left') {
      skimmerX = containerWidth + 1 - (progress * totalDistance);
    } else {
      skimmerX = -1 + (progress * totalDistance);
    }
    
    currentPositionRef.current = skimmerX;
    
    // Update skimmer bar position
    skimmerBarRef.current.style.transform = `translateX(${skimmerX}px)`;
    
    // Clear canvas
    ctx.clearRect(0, 0, containerWidth, containerHeight);
    
    // Spawn new specks if still sweeping
    if (progress < 0.9) {
      spawnSpecks(skimmerX, containerWidth, containerHeight);
    }
    
    // Update and draw specks
    specksRef.current = specksRef.current.filter(speck => {
      // Apply drift if not captured
      if (!speck.captured && config.particleDrift) {
        // Apply horizontal drift
        if (speck.vx) {
          speck.x += speck.vx;
        }
        
        // Apply vertical drift (gravity effect)
        if (speck.vy && speck.weight) {
          speck.y += speck.vy * speck.weight;
          // Accelerate slightly over time
          speck.vy = Math.min(speck.vy + 0.01, 2);
        }
        
        // Keep particles in bounds
        speck.y = Math.max(0, Math.min(containerHeight, speck.y));
      }
      
      // Check if speck should be captured (account for direction)
      const shouldCapture = config.direction === 'right-to-left' 
        ? speck.x >= skimmerX 
        : speck.x <= skimmerX;
        
      if (!speck.captured && shouldCapture) {
        speck.captured = true;
        speck.capturedAtX = skimmerX;
        
        // Power wash captures instantly with no ride
        if (config.sweepType === 'power-wash') {
          speck.fadeStartX = skimmerX;
        }
      }
      
      // Update position if captured
      if (speck.captured && speck.capturedAtX !== undefined) {
        speck.x = skimmerX;
        
        // Start fading after riding for CAPTURE_RIDE_DISTANCE
        const rideDistance = Math.abs(skimmerX - speck.capturedAtX);
        const fadeThreshold = containerWidth * CAPTURE_RIDE_DISTANCE;
        
        if (rideDistance > fadeThreshold || speck.fadeStartX !== undefined) {
          if (!speck.fadeStartX) {
            speck.fadeStartX = skimmerX;
          }
          
          // Fade out over 20 pixels
          const fadeDistance = Math.abs(skimmerX - speck.fadeStartX);
          speck.opacity *= (1 - fadeDistance / 20);
          
          // Remove when fully faded
          if (speck.opacity <= 0.01) {
            return false;
          }
        }
      }
      
      // Draw speck with color variation
      const color = speck.color || 'rgba(24, 185, 232';
      ctx.fillStyle = `${color}, ${speck.opacity})`;
      ctx.fillRect(speck.x, speck.y, speck.size, speck.size);
      
      // Keep specks that are still visible and in bounds
      return speck.opacity > 0.01 && 
             speck.x > -10 && 
             speck.x < containerWidth + 10 &&
             speck.y >= 0 && 
             speck.y <= containerHeight;
    });
    
    // Continue animation or end sweep
    if (progress < 1 && isSweepingRef.current) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      // Sweep complete
      endSweep();
    }
  }, [spawnSpecks]);

  const startSweep = useCallback(() => {
    if (!layerRef.current || !canvasRef.current || !skimmerBarRef.current) {
      console.warn('[SubPixelSkimmer] Missing refs, retrying in 100ms');
      timeoutRef.current = setTimeout(startSweep, 100);
      return;
    }
    
    // Initialize canvas
    if (!initCanvas()) {
      console.warn('[SubPixelSkimmer] Canvas init failed, retrying in 100ms');
      timeoutRef.current = setTimeout(startSweep, 100);
      return;
    }
    
    // Generate new sweep configuration
    const config = generateSweepConfig();
    sweepConfigRef.current = config;
    
    console.log('[SubPixelSkimmer] Starting sweep', {
      type: config.sweepType,
      duration: config.duration,
      direction: config.direction,
      lineWidth: config.lineWidth
    });
    
    // Update skimmer bar styles based on config
    skimmerBarRef.current.style.width = `${config.lineWidth}px`;
    skimmerBarRef.current.style.setProperty('--line-opacity', config.lineOpacity.toString());
    skimmerBarRef.current.style.setProperty('--glow-intensity', config.lineGlowIntensity.toString());
    
    // Reset state
    specksRef.current = [];
    isSweepingRef.current = true;
    sweepStartTimeRef.current = Date.now();
    currentPositionRef.current = -1; // Will be set properly in animate
    setIsActive(true);
    
    // Make skimmer visible and position based on direction
    skimmerBarRef.current.style.opacity = '1';
    const startX = config.direction === 'right-to-left' ? 'calc(100% + 1px)' : '-1px';
    skimmerBarRef.current.style.transform = `translateX(${startX})`;
    
    // Start animation loop
    animate();
  }, [initCanvas, animate, generateSweepConfig]);

  const endSweep = useCallback(() => {
    console.log('[SubPixelSkimmer] Ending sweep');
    
    isSweepingRef.current = false;
    setIsActive(false);
    
    // Cancel animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    // Fade out remaining specks
    if (canvasRef.current && layerRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const containerRect = layerRef.current.getBoundingClientRect();
      
      if (ctx) {
        let fadeOpacity = 1;
        const fadeOut = () => {
          fadeOpacity -= 0.05;
          
          if (fadeOpacity <= 0 || specksRef.current.length === 0) {
            ctx.clearRect(0, 0, containerRect.width, containerRect.height);
            specksRef.current = [];
            
            // Hide skimmer bar
            if (skimmerBarRef.current) {
              skimmerBarRef.current.style.opacity = '0';
              skimmerBarRef.current.style.transform = 'translateX(-1px)';
            }
            
            // Schedule next sweep with configured pause
            const pauseDuration = sweepConfigRef.current?.pauseAfter || randomRange(3000, 10000);
            timeoutRef.current = setTimeout(startSweep, pauseDuration);
            return;
          }
          
          ctx.clearRect(0, 0, containerRect.width, containerRect.height);
          ctx.globalAlpha = fadeOpacity;
          
          specksRef.current.forEach(speck => {
            const color = speck.color || 'rgba(24, 185, 232';
            ctx.fillStyle = `${color}, ${speck.opacity * fadeOpacity})`;
            ctx.fillRect(speck.x, speck.y, speck.size, speck.size);
          });
          
          ctx.globalAlpha = 1;
          requestAnimationFrame(fadeOut);
        };
        
        fadeOut();
      } else {
        // Fallback: just hide and schedule next
        if (skimmerBarRef.current) {
          skimmerBarRef.current.style.opacity = '0';
        }
        const pauseDuration = sweepConfigRef.current?.pauseAfter || randomRange(3000, 10000);
        timeoutRef.current = setTimeout(startSweep, pauseDuration);
      }
    }
  }, [startSweep]);

  // Start the initial sweep after delay
  useEffect(() => {
    if (!supportsSkimmer()) return;
    
    console.log('[SubPixelSkimmer] Scheduling initial sweep');
    timeoutRef.current = setTimeout(startSweep, INITIAL_DELAY);
    
    return () => {
      // Cleanup on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      isSweepingRef.current = false;
    };
  }, [startSweep]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Reinitialize canvas on resize if currently sweeping
      if (isSweepingRef.current) {
        initCanvas();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  // Handle visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isSweepingRef.current) {
        // Pause animation when tab is hidden
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
      } else if (!document.hidden && isSweepingRef.current) {
        // Resume animation when tab is visible
        animate();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [animate]);

  // Don't render if not supported
  if (!supportsSkimmer()) {
    return null;
  }

  return (
    <div
      ref={layerRef}
      id="skimmer-layer"
      className="absolute inset-0 pointer-events-none z-[60] overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        id="speck-canvas"
        className="absolute inset-0 w-full h-full"
      />
      <div
        ref={skimmerBarRef}
        id="skimmer-bar"
        className="skimmer-bar"
        style={{
          opacity: 0,
          transform: 'translateX(-1px)',
        }}
      />
    </div>
  );
} 