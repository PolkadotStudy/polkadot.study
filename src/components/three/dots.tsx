import * as THREE from "three";
import {
  Canvas,
  useFrame,
  ThreeElements,
  extend,
  useThree,
} from "@react-three/fiber";
import { RenderPixelatedPass } from "three/addons/postprocessing/RenderPixelatedPass.js";
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls,
  Effects,
} from "@react-three/drei";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";

extend({ RenderPixelatedPass });

function Box(props: ThreeElements["mesh"] & { index: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const pink = useMemo(() => new THREE.Color("#e6007a"), []);
  const purple = useMemo(() => new THREE.Color("#552BBF"), []);
  const cyan = useMemo(() => new THREE.Color("#00B2FF"), []);
  const lime = useMemo(() => new THREE.Color("#D3FF33"), []);
  const green = useMemo(() => new THREE.Color("#56F39A"), []);

  const toColors = [purple, cyan, green];

  useFrame(({ mouse, clock, viewport }, delta) => {
    const x = (mouse.x * viewport.width) / 2.5;
    const y = (mouse.y * viewport.height) / 2.5;
    ref.current.lookAt(x, y, 0);
    ref.current.position.y =
      Math.sin(clock.elapsedTime / 2.0 - props.index) * 0.9;

    ref.current.material.color.lerp(
      hovered ? toColors[props.index] : pink,
      0.1
    );

    // ref.current.scale.lerp(
    //   hovered ? new THREE.Vector3(2, 1, 1) : new THREE.Vector3(1, 1, 1),
    //   0.05
    // );
  });
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      scale={[1, 1, 1]}
    >
      <sphereBufferGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial />
    </mesh>
  );
}

function Scene() {
  const { scene, camera } = useThree();

  return (
    <>
      {/* <Effects renderIndex={1} disableGamma={true} disableRenderPass={true}>
        <renderPixelatedPass pixelSize={50} scene={scene} camera={camera} a />
      </Effects> */}
      <Box position={[0, 1.5, 0]} index={0} />
      <Box position={[-1.2, 0, 0]} index={1} />
      <Box position={[1.2, 0, 0]} index={2} />
    </>
  );
}

export default function Dots() {
  const ref = useRef<THREE.PointLight>(null!);
  return (
    <Canvas>
      <Scene />
      <pointLight ref={ref} position={[10, 10, 10]} />
      <ambientLight intensity={1.0} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enableDamping={true}
        enableRotate={true}
        enablePan={true}
        enableZoom={false}
      />
    </Canvas>
  );
}
