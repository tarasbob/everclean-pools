"use client";

import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook that detects user inactivity and triggers a callback after specified delay
 * @param callback - Function to call when user is idle
 * @param delay - Milliseconds to wait before considering user idle (default: 5000)
 */
export function useIdle(callback: () => void, delay: number = 5000) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const callbackRef = useRef(callback);
  const lastPointerPosRef = useRef({ x: 0, y: 0 });

  // Update callback ref to avoid stale closures
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const resetTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callbackRef.current();
    }, delay);
  }, [delay]);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    // Ignore tiny movements (< 10px) to avoid jitter
    const deltaX = Math.abs(e.clientX - lastPointerPosRef.current.x);
    const deltaY = Math.abs(e.clientY - lastPointerPosRef.current.y);
    
    if (deltaX > 10 || deltaY > 10) {
      lastPointerPosRef.current = { x: e.clientX, y: e.clientY };
      resetTimer();
    }
  }, [resetTimer]);

  const handleActivity = useCallback(() => {
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    // Initial timer setup
    resetTimer();

    // Event listeners for user activity
    const events = [
      'pointerdown',
      'wheel',
      'keydown',
      'touchstart',
      'scroll',
    ] as const;

    // Add all activity listeners
    events.forEach(event => {
      window.addEventListener(event, handleActivity, { passive: true });
    });

    // Special handling for pointermove to ignore small movements
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      events.forEach(event => {
        window.removeEventListener(event, handleActivity);
      });
      
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [handleActivity, handlePointerMove, resetTimer]);
} 