import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Pencils = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/pencils-6-v2.glb');

  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    easing.dampC(materials.Material.color, snap.color, 0.25, delta);
    easing.dampC(materials.Pencil.color, snap.textcolor, 0.25, delta);
  });
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString} rotation={[0, -1.6, 0]} scale={3}>
      <group position={[0, 2.97, -0.27]} scale={[0.76, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Pencil}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials.Pencil}
        position={[0.01, 2.82, -0.25]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.04}
      />
      <group position={[-0.02, 2.92, -0.26]} rotation={[2.44, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials.Pencil}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials.Pencil}
        position={[0.01, 3.05, -0.25]}
        rotation={[2.69, 0, -1.57]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials.Pencil}
        position={[0.01, 2.9, -0.25]}
        rotation={[1.57, 0, -1.57]}
        scale={0.0045}
      />
    </group>
  );
};

export default Pencils;
