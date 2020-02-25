import ReactDOM from "react-dom";
import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import Text from "./text";
function Jumbo() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z =
        Math.sin(clock.getElapsedTime()) * 0.3)
  );
  return (
    <group ref={ref}>
      <Text hAlign="left" position={[0, 4.2, 0]} children="JAVASCRIPT" />
      <Text hAlign="left" position={[0, 0, 0]} children="HTML" />
      <Text hAlign="left" position={[0, -4.2, 0]} children="CSS" />
      <Text hAlign="left" position={[12, 0, 0]} children="4" size={3} />
      <Text hAlign="left" position={[16.5, -4.2, 0]} children="X" />
    </group>
  );
}
function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh {...props} ref={mesh} scale={[1.5, 1.5, 1.5]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={"orange"} />
    </mesh>
  );
}
const SkillsAnimation = () => {
  return (
    <Canvas camera={{ position: [0, 0, 64] }} className="canvas">
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Box position={[-1.2, -10, 0]} />
        <Box position={[1.2, -10, 0]} />
        <Jumbo />
      </Suspense>
    </Canvas>
  );
};

export default SkillsAnimation;
