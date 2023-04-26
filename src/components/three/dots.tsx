import * as THREE from "three";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import React, { useRef, useState } from "react";

function Box(props: ThreeElements["mesh"] & { index: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => {
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime / 2.0 - props.index) * 0.9;
  });
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereBufferGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={hovered ? "#552BBF" : "#e6007a"} />
    </mesh>
  );
}

export default function Dots() {
  const ref = useRef<THREE.PointLight>(null!);
  return (
    <Canvas>
      <ambientLight />
      <pointLight ref={ref} position={[10, 10, 10]} />
      <Box position={[0, 1.5, 0]} index={0} />
      <Box position={[-1.2, 0, 0]} index={1} />
      <Box position={[1.2, 0, 0]} index={2} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={3}
        enableDamping={true}
        enableRotate={true}
        enablePan={true}
        enableZoom={false}
      />
    </Canvas>
  );
}