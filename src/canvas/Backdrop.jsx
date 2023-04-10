import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { useControls } from 'leva';

const Backdrop = () => {
  const shadows = useRef();

  // const { amount, radius, intensity, ambient, position } = useControls({
  //   amount: { value: 2, min: 1, max: 10, step: 1 },
  //   radius: { value: 20, min: 1, max: 20, step: 1 },
  //   intensity: { value: 0.35, min: 0, max: 1, step: 0.01 },
  //   ambient: { value: 0.38, min: 0, max: 1, step: 0.01 },
  //   position: { value: [10.0, 10.0, -1.0], min: -10, max: 10, step: 0.1 },
  // });

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
