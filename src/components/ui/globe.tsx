/* eslint-disable */
"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring } from '@react-spring/web';

import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 0,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [218 / 255, 165 / 255, 32 / 255], //218 165% 32% - golden color
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  const [{ phi }, api] = useSpring(() => ({ phi: 0 }));
  const autoRotationRef = useRef(0);

  const updatePointerInteraction = useCallback((clientX: number | null) => {
    pointerInteracting.current = clientX;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = clientX !== null ? "grabbing" : "grab";
    }
  }, []);

  const updateMovement = useCallback((clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ phi: phi.get() + delta * 0.01 });
    }
  }, [api, phi]);

  const onRender = useCallback((state: Record<string, any>) => {
    if (pointerInteracting.current === null) {
      autoRotationRef.current += 0.005;
    }
    state.phi = phi.get() + autoRotationRef.current;
    state.width = size.width;
    state.height = size.height;
  }, [phi, size]);

  const handleResize = useCallback(() => {
    if (canvasRef.current) {
      const containerWidth = canvasRef.current.parentElement?.clientWidth || 0;
      // const globeSize = containerWidth // Math.min(containerWidth, 900); // Max 600px, but can be smaller based on container
      setSize({ width: containerWidth, height: containerWidth });
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (!canvasRef.current || size.width === 0 || size.height === 0) return;

    if (globeRef.current) {
      globeRef.current.destroy();
    }

    globeRef.current = createGlobe(canvasRef.current, {
      ...config,
      width: size.width,
      height: size.height,
      onRender: (state) => {
        state.width = size.width;
        state.height = size.height;
        onRender(state);
      },
    });

    canvasRef.current.style.opacity = "1";

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
      }
    };
  }, [config, onRender, size]);

  return (
    <div className={cn("flex justify-center items-center", className)}>
      <canvas
        className="opacity-0 transition-opacity duration-500"
        ref={canvasRef}
        width={size.width}
        height={size.height}
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}
