import React, { Suspense, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/anime_saki_bikini_girl.glb');

  return <primitive object={scene} scale={1} position={[0, -2.5, 0]} />;
};

const ModelViewer = () => {
  const controlsRef = useRef();

  return (
    <div className='mulher' style={{ width: '50vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 5, 20], fov: 15 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          target={[0, 0, 0]}
          enablePan={true}
          makeDefault
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
