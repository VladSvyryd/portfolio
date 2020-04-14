import { useLoader } from "react-three-fiber";
import { Suspense, useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Asset = (props) => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load(props.url, setModel);
  }, []);
  return model ? (
    <mesh {...props}>
      <primitive object={model.scene} />;
    </mesh>
  ) : null;
};

export default Asset;
