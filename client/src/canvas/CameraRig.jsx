import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import state from '../store';

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let targetPosition = [-0.6, 0, 5];
    if (snap.intro) {
      if (isBreakpoint) {
        targetPosition = [0, 0, 6.5];
      }
      if (isMobile) {
        targetPosition = [0, 0, 6.5];
      }
    } else {
      if (isMobile) {
        targetPosition = [0, 0, 5.5];
      } else {
        if (snap.pencils === 'num3') {
          targetPosition = [0, 0, 4.5];
        } else {
          targetPosition = [0, 0, 5.5];
        }
      }
    }

    // set camera model position
    easing.damp3(state.camera.position, targetPosition, 0.15, delta);

    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, state.pointer.x / 10, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
