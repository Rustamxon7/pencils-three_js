import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import Pencil from './Pencil';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Pencils from './Pencils';
import { useSnapshot } from 'valtio';
import state from '../store';

const CanvasModel = () => {
  const snap = useSnapshot(state);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight intensity={0.5} />
      {/* <EnvironmentCube /> */}
      <Environment files='./small_empty_room_3_1k.hdr' />
      <CameraRig>
        <Backdrop />
        <Center>{snap.pencils === 'num3' ? <Pencil /> : <Pencils />}</Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
