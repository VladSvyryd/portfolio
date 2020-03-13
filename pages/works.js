import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import w from "../styles/works.module.css";

const works = () => {
  const x = useMotionValue(0);
  const rotateY = useTransform(
    x,
    "M375,0s-56.276,196.553-56.276,399.272S375,810.876,375,810.876H-.385V0Z",
    "M-.385,0V810.876h0V0Z"
  );

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0 }}
      className={w.container}
      style={{ x }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={w.svg}
        viewBox="0 0 375.385 810.876"
      >
        <motion.path
          fill="#ff3535"
          style={{
            rotateY
          }}
        />
      </svg>
    </motion.div>
  );
};

export default works;
