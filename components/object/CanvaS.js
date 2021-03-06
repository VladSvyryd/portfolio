import { Canvas, extend } from "react-three-fiber";
import dynamic from "next/dynamic";
// import Controls from "./controls";
// import Plane from "./plane";
// import Asset from "./asset";
import * as THREE from "three";
import { Suspense } from "react";

const Controls = dynamic(() => import("./controls"), {
  ssr: false,
});
const Plane = dynamic(() => import("./plane"), {
  ssr: false,
});
const Asset = dynamic(() => import("./asset"), {
  ssr: false,
});
const MyObject = dynamic(() => import("./object"), {
  ssr: false,
});
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const CanvaS = () => {
  return (
    <Suspense>
      <Canvas
        camera={{ position: [0, 5, 5] }}
        //   onCreated={({ gl }) => {
        //     gl.shadowMap.enabled = true;
        //     gl.shadowMap.type = THREE.PCFSoftShadowMap;
        //   }}
      >
        <fog attach="fog" args={["rgb(39, 38, 65)", 5, 15]} />
        <Controls
          autoRotate={true}
          maxPolarAngle={1.47079632679}
          minPolarAngle={1.04719755}
          enableDamping={true}
        />
        {/* <ambientLight intensity={1.4} /> */}
        <pointLight
          position={[5, 15, 15]}
          intensity={2.6}
          //   sphereSize={10}
          penumbra={1}
          // castShadow
        />
        {/* <MyObject position={[0, 0.5, 0]} /> */}
        <Asset url="/three_asset/scene.gltf" scale={[0.05, 0.05, 0.05]} />

        <Plane />
      </Canvas>
    </Suspense>
  );
};

export default CanvaS;
