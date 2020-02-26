import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, Euler } from "react-three-fiber";
import Text from "./text";
function Jumbo(props) {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.3)
  );
  return (
    <group ref={ref} rotation={props.rotation} position={props.position}>
      <Text
        hAlign="center"
        vAlign="center"
        children="JAVASCRIPT"
        color="skyblue"
      />
    </group>
  );
}

const SkillsAnimation = () => {
  const [clicked, set] = useState(false);

  return (
    <>
      <Canvas camera={{ position: [0, 0, 44] }} className="canvas">
        {/* <ambientLight intensity={2} /> */}
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          {clicked && (
            <>
              <Jumbo position={[0, 0, 0]} />
              <Jumbo position={[-30, 5, 0]} />
              <Jumbo position={[30, 5, 0]} rotation={[0, -0.53, 0]} />
            </>
          )}
        </Suspense>
      </Canvas>
      {!clicked && (
        <button className="canvas_button" onClick={() => set(true)}>
          Load duck w/ 1s delay
        </button>
      )}
    </>
  );
};

export default SkillsAnimation;
