"use client";

import { useState, useEffect } from 'react';
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";

export default function TestSkimmerPage() {
  const [mounted, setMounted] = useState(false);
  const [skimmerEnabled, setSkimmerEnabled] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(0);
  
  useEffect(() => {
    setMounted(true);
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      setTimeElapsed((Date.now() - startTime) / 1000);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (mounted) {
      setSkimmerEnabled(document.body.getAttribute('data-skimmer-enabled') === 'true');
    }
  }, [mounted]);

  const toggleSkimmer = () => {
    const newState = !skimmerEnabled;
    document.body.setAttribute('data-skimmer-enabled', newState.toString());
    setSkimmerEnabled(newState);
    window.location.reload();
  };

  const getPhase = () => {
    if (timeElapsed < 2) {
      return `Initial delay: ${(2 - timeElapsed).toFixed(1)}s remaining`;
    }
    
    const cycleTime = (timeElapsed - 2) % 15; // 10s sweep + 5s pause = 15s cycle
    
    if (cycleTime < 10) {
      return `Sweeping: ${(10 - cycleTime).toFixed(1)}s remaining`;
    } else {
      return `Paused: ${(15 - cycleTime).toFixed(1)}s until next sweep`;
    }
  };

  return (
    <>
      <Hero
        title="Sub-Pixel Skimmer Test"
        subtitle="Automatic sweep demonstration"
        description="The skimmer starts 2 seconds after page load and repeats every 15 seconds (10s sweep + 5s pause)."
        backgroundImage="/images/hero-pool.jpg"
        height="tall"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Skimmer Effect Test Controls</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Status</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Current phase: <span className="font-mono font-bold text-pool-blue">
                    {getPhase()}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Time since load: <span className="font-mono">
                    {timeElapsed.toFixed(1)}s
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Skimmer enabled: <span className="font-mono font-bold">
                    {skimmerEnabled ? 'true' : 'false'}
                  </span>
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Timing Sequence</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  <li>Page loads → 2 second delay</li>
                  <li>First sweep begins → 10 seconds to cross screen</li>
                  <li>Sweep ends → 5 second pause</li>
                  <li>Next sweep begins → cycle repeats</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Debug Controls</h3>
                <Button onClick={toggleSkimmer} variant="outline" size="sm">
                  {skimmerEnabled ? 'Disable' : 'Enable'} Skimmer
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Note: Toggling will reload the page
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-pool-blue">What to Look For</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>A thin vertical line moving left to right</li>
                  <li>Small dust-like specks appearing ahead of the line</li>
                  <li>Specks sticking to the line and fading away</li>
                  <li>Continuous loop with 5-second pauses between sweeps</li>
                  <li>Smooth 60fps animation on all devices</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-amber-700">Performance Notes</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Uses JavaScript-controlled animation for precise timing</li>
                  <li>RequestAnimationFrame for smooth 60fps performance</li>
                  <li>Pauses when tab is not visible to save resources</li>
                  <li>Handles window resizing gracefully</li>
                  <li>Total bundle size: ~7KB minified + gzipped</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 