import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { invalidate } = useThree();

  // Smooth interaction scaling
  useFrame(() => {
    if (meshRef.current) {
      const targetScale = hovered ? 2.95 : 2.75; // Small, natural tactile scale on hover
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );

      // Keep animation alive until scale stabilizes
      if (Math.abs(meshRef.current.scale.x - targetScale) > 0.01) {
        invalidate();
      }
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        scale={2.75}
        onPointerOver={() => {
          setHovered(true);
          invalidate(); // Wake up the frameloop
        }}
        onPointerOut={() => {
          setHovered(false);
          invalidate();
        }}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // @ts-expect-error
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Custom controller to handle the exact 1.7s inactivity reset requirements properly under the demand frameloop
const SmartOrbitControls = () => {
  const controlsRef = useRef<any>(null);
  const { camera, invalidate } = useThree();
  const isInteracting = useRef(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReset = useRef(false);

  useFrame(() => {
    if (shouldReset.current && !isInteracting.current && controlsRef.current) {
      // Instead of linearly moving the camera in a straight line (which causes the camera to clip through the center of the 3D model box),
      // we extract the spherical coordinates and smoothly glide the camera back along the outside perimeter orbit path.
      const azimuth = controlsRef.current.getAzimuthalAngle();
      const polar = controlsRef.current.getPolarAngle();
      
      const targetAzimuth = 0;
      const targetPolar = Math.PI / 2; // Default dead center orbit
      
      // Extremely buttery smooth interpolation modifier (0.04)
      const newAzimuth = THREE.MathUtils.lerp(azimuth, targetAzimuth, 0.04);
      const newPolar = THREE.MathUtils.lerp(polar, targetPolar, 0.04);
      
      // Calculate active camera radius
      const radius = camera.position.distanceTo(controlsRef.current.target);
      const spherical = new THREE.Spherical(radius, newPolar, newAzimuth);
      
      camera.position.setFromSpherical(spherical);
      camera.lookAt(controlsRef.current.target);
      controlsRef.current.update();

      invalidate(); // Keep rendering loop alive

      // Turn off interpolation once snapped close enough to zero threshold
      if (Math.abs(newAzimuth) < 0.01 && Math.abs(newPolar - targetPolar) < 0.01) {
        // Snap perfectly at the end to kill decimals
        camera.position.setFromSpherical(new THREE.Spherical(radius, targetPolar, targetAzimuth));
        camera.lookAt(controlsRef.current.target);
        controlsRef.current.update();
        shouldReset.current = false;
        invalidate(); // Render the final perfect frame
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={false}
      onStart={() => {
        isInteracting.current = true;
        shouldReset.current = false;
        if (resetTimer.current) clearTimeout(resetTimer.current);
      }}
      onEnd={() => {
        isInteracting.current = false;
        // Start explicit 1.7s inactivity timer before spring-reset triggers
        resetTimer.current = setTimeout(() => {
          shouldReset.current = true;
          invalidate(); // Jumpstart interpolation loop securely
        }, 1700);
      }}
    />
  );
};

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <SmartOrbitControls />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
