import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import dynamic from "next/dynamic";
import { useRef } from "react";
const CanvaS = dynamic(() => import("../components/object/CanvaS"), {
  ssr: false,
});

const Three = () => {
  return <CanvaS />;
};

export default Three;
