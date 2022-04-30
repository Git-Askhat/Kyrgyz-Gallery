import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Brakedance from '../../Brakedance.js';
import { OrbitControls } from '@react-three/drei/core/OrbitControls';

export default function Model() {
  return (
    <Canvas>
      <OrbitControls />
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.2} />
      <Suspense fallback={null}>
        <Brakedance />
      </Suspense>
    </Canvas>
  );
}
