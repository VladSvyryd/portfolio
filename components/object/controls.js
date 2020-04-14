import { useRef } from "react";
import { useThree, useFrame } from "react-three-fiber";

const Controls = (props) => {
  const myRef = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    myRef.current.update();
  });
  return (
    <orbitControls {...props} args={[camera, gl.domElement]} ref={myRef} />
  );
};

export default Controls;
