import { Canvas, extend } from "react-three-fiber";
import dynamic from "next/dynamic";
import Controls from "./controls";
import Plane from "./plane";
import Asset from "./asset";
import * as THREE from "three";

// const Plane = dynamic(() => import("./plane"), {
//   ssr: false,
// });
// const Asset = dynamic(() => import("./asset"), {
//   ssr: false,
// });
const MyObject = dynamic(() => import("./object"), {
  ssr: false,
});
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const CanvaS = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 5] }}
      //   onCreated={({ gl }) => {
      //     gl.shadowMap.enabled = true;
      //     gl.shadowMap.type = THREE.PCFSoftShadowMap;
      //   }}
    >
      <fog attach="fog" args={["rgb(39, 38, 65)", 5, 15]} />
      <Controls
        // autoRotate={true}
        maxPolarAngle={1.04719755}
        minPolarAngle={1.04719755}
        enableDamping={true}
      />
      {/* <ambientLight intensity={1.4} /> */}
      <pointLight
        position={[0, 5, 10]}
        // intensity={1.4}
        penumbra={1}
        // castShadow
      />
      {/* <MyObject position={[0, 0.5, 0]} /> */}
      <Asset url="/three_asset/scene.gltf" scale={[0.05, 0.05, 0.05]} />

      <Plane />
    </Canvas>
  );
};

export default CanvaS;
