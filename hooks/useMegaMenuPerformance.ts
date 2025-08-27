import { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  animationFrames: number;
  memoryUsage?: number;
}

export const useMegaMenuPerformance = (isOpen: boolean) => {
  const renderStartTime = useRef<number>(0);
  const frameCount = useRef<number>(0);
  const animationId = useRef<number | null>(null);

  const measureFrameRate = useCallback(() => {
    frameCount.current += 1;
    animationId.current = requestAnimationFrame(measureFrameRate);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Start performance measurements when mega menu opens
      renderStartTime.current = performance.now();
      frameCount.current = 0;
      
      // Start measuring frame rate
      animationId.current = requestAnimationFrame(measureFrameRate);

      // Stop measurements after 1 second
      const timeoutId = setTimeout(() => {
        if (animationId.current) {
          cancelAnimationFrame(animationId.current);
          
          const renderTime = performance.now() - renderStartTime.current;
          const fps = frameCount.current; // Approximate FPS
          
          const metrics: PerformanceMetrics = {
            renderTime,
            animationFrames: frameCount.current,
          };

          // Add memory usage if available
          if ('memory' in performance) {
            metrics.memoryUsage = (performance as any).memory.usedJSHeapSize;
          }

          // Log performance metrics (in production, send to analytics)
          console.log('MegaMenu Performance Metrics:', metrics);
          
          // Warn if performance is poor
          if (renderTime > 100) {
            console.warn('MegaMenu render time is slow:', renderTime + 'ms');
          }
          
          if (fps < 30) {
            console.warn('MegaMenu animation frame rate is low:', fps + ' FPS');
          }
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
        if (animationId.current) {
          cancelAnimationFrame(animationId.current);
        }
      };
    }
  }, [isOpen, measureFrameRate]);

  return null; // This hook doesn't return JSX
};