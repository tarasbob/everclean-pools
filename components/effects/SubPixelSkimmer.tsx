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
  
  // Timing constants
  const INITIAL_DELAY = 2000; // 2 seconds after mount
  const SWEEP_DURATION = 10000; // 10 seconds to cross screen
  const PAUSE_BETWEEN_SWEEPS = 5000; // 5 seconds pause
  
  // Speck engine parameters
  const SPAWN_RATE = 0.15;
  const SPECK_MIN_SIZE = 1;
  const SPECK_MAX_SIZE = 2;
  const CAPTURE_RIDE_DISTANCE = 0.08; // 8% of container width
  const SPAWN_AHEAD_MIN = 30;
  const SPAWN_AHEAD_MAX = 120;

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

  const spawnSpecks = useCallback((skimmerX: number, containerWidth: number, containerHeight: number) => {
    if (Math.random() < SPAWN_RATE && skimmerX >= 0 && skimmerX < containerWidth - 100) {
      const numSpecks = Math.floor(Math.random() * 2) + 1; // 1-2 specks
      
      for (let i = 0; i < numSpecks; i++) {
        const speck: Speck = {
          x: skimmerX + SPAWN_AHEAD_MIN + Math.random() * (SPAWN_AHEAD_MAX - SPAWN_AHEAD_MIN),
          y: 40 + Math.random() * (containerHeight - 80), // Keep away from edges
          size: SPECK_MIN_SIZE + Math.random() * (SPECK_MAX_SIZE - SPECK_MIN_SIZE),
          opacity: 0.3 + Math.random() * 0.4, // 0.3 to 0.7 opacity
          captured: false,
        };
        
        // Only add speck if it's within bounds
        if (speck.x < containerWidth + SPAWN_AHEAD_MAX) {
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
    const progress = Math.min(elapsed / SWEEP_DURATION, 1);
    
    // Calculate skimmer position
    const totalDistance = containerWidth + 200; // Extra distance to ensure complete sweep
    const skimmerX = -1 + (progress * totalDistance);
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
      // Check if speck should be captured
      if (!speck.captured && speck.x <= skimmerX) {
        speck.captured = true;
        speck.capturedAtX = skimmerX;
      }
      
      // Update position if captured
      if (speck.captured && speck.capturedAtX !== undefined) {
        speck.x = skimmerX;
        
        // Start fading after riding for CAPTURE_RIDE_DISTANCE
        const rideDistance = skimmerX - speck.capturedAtX;
        const fadeThreshold = containerWidth * CAPTURE_RIDE_DISTANCE;
        
        if (rideDistance > fadeThreshold) {
          if (!speck.fadeStartX) {
            speck.fadeStartX = skimmerX;
          }
          
          // Fade out over 20 pixels
          const fadeDistance = skimmerX - speck.fadeStartX;
          speck.opacity *= (1 - fadeDistance / 20);
          
          // Remove when fully faded
          if (speck.opacity <= 0.01) {
            return false;
          }
        }
      }
      
      // Draw speck
      ctx.fillStyle = `rgba(100, 120, 140, ${speck.opacity})`;
      ctx.fillRect(speck.x, speck.y, speck.size, speck.size);
      
      // Keep specks that are still visible
      return speck.x > -10 && speck.opacity > 0.01;
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
    
    console.log('[SubPixelSkimmer] Starting sweep');
    
    // Reset state
    specksRef.current = [];
    isSweepingRef.current = true;
    sweepStartTimeRef.current = Date.now();
    currentPositionRef.current = -1;
    setIsActive(true);
    
    // Make skimmer visible
    skimmerBarRef.current.style.opacity = '1';
    skimmerBarRef.current.style.transform = 'translateX(-1px)';
    
    // Start animation loop
    animate();
  }, [initCanvas, animate]);

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
            
            // Schedule next sweep
            timeoutRef.current = setTimeout(startSweep, PAUSE_BETWEEN_SWEEPS);
            return;
          }
          
          ctx.clearRect(0, 0, containerRect.width, containerRect.height);
          ctx.globalAlpha = fadeOpacity;
          
          specksRef.current.forEach(speck => {
            ctx.fillStyle = `rgba(100, 120, 140, ${speck.opacity})`;
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
        timeoutRef.current = setTimeout(startSweep, PAUSE_BETWEEN_SWEEPS);
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