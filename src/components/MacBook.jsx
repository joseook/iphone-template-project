/*
This component creates a MacBook 3D model using primitive geometry
It will be replaced by a GLB model imported with useGLTF once available
*/

import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function MacBook(props) {
  const modelRef = useRef();

  // This will be used when we have a GLB file
  // const { nodes, materials } = useGLTF("/models/macbook.glb");

  // Load texture for the screen
  const texture = useTexture(props.item.img);

  useEffect(() => {
    // Apply color change to materials when the props.item.color changes
    if (modelRef.current) {
      const color = new THREE.Color(props.item.color[0]);
      modelRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          // Don't change color of specific parts like screen, keyboard, etc.
          if (child.name !== 'screen' && child.name !== 'keyboard' && child.name !== 'touchpad') {
            child.material.color = color;
            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [props.item]);

  return (
    <group ref={modelRef} {...props} dispose={null}>
      {/* Enhanced MacBook model with more realistic parts */}
      {/* Base */}
      <mesh
        name="base"
        position={[0, -0.1, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color={props.item.color[0]} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Screen */}
      <group position={[0, 0.7, -0.8]} rotation={[Math.PI / 6, 0, 0]}>
        {/* Screen Frame */}
        <mesh
          name="screenFrame"
          castShadow
          receiveShadow
        >
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial color={props.item.color[0]} metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Screen Display */}
        <mesh
          name="screen"
          position={[0, 0, 0.06]}
          castShadow
          receiveShadow
        >
          <planeGeometry args={[2.8, 1.8]} />
          <meshStandardMaterial
            map={texture}
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Apple Logo */}
        <mesh
          name="logo"
          position={[0, 0.5, -0.06]}
          castShadow
          receiveShadow
        >
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Keyboard Area */}
      <group position={[0, 0, 0.4]}>
        {/* Touchpad */}
        <mesh
          name="touchpad"
          position={[0, -0.02, 0.2]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[1.2, 0.02, 0.8]} />
          <meshStandardMaterial color="#d1d1d1" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Keyboard */}
        <mesh
          name="keyboard"
          position={[0, -0.02, -0.4]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[2.5, 0.02, 1.2]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>
    </group>
  );
}

// This will be uncommented when we have the GLB file
// useGLTF.preload("/models/macbook.glb");

export default MacBook; 