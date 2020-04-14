import { useLoader } from "react-three-fiber";
import { Suspense, useState, useEffect, useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Asset = (props) => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load(props.url, setModel, ({ total, loaded }) => {
      console.log({ total }, { loaded });
    });
  }, []);

  return model ? (
    <mesh {...props}>
      <primitive object={model.scene} />;
    </mesh>
  ) : null;
};

export default Asset;
