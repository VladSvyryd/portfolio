import Link from "../components/link/link";
import Parallax from "../components/parralax/parallax";
import styles from "../styles/index.module.css";
import Typed from "react-typed";
import { motion, useCycle } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const anim_init_Desktop = {
  opacity: 0,
  translateX: "+100%"
};
const anim_finish_Desktop = {
  opacity: 1,
  scale: 1,
  translateX: "0%",
  transition: {
    duration: 0.5,
    type: "spring"
  }
};

const textArray =
  'import React, { useState } from "react"; ^1000\n <br> <br> const Portfolio=()=> { ^1000\n <br> <br> const [success, setSuccess] = useState(true); ^500\n <br> <br> const moto=["<b>Just</b>","<b>Do</b>","<b>It</b>","<b>!!!</b>"] <br> <br> ^300\n return ( <br> <br> moto.map(word=>(<i>word</i>) <br> <br> ); <br> <br> ^200\n }';
function HomePage() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [screen, setScreen] = useState({ w: 500, h: 500 });
  const [heartArr, setHeartArr] = useState([]);
  const screenRef = useRef(null);
  const heart = () => {
    return (
      <svg
        className="heart"
        height="18pt"
        viewBox="0 -20 464 464"
        width="18pt"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
          fill="#ff6243"
        />
        <path
          d="m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0"
          fill="#ff5023"
        />
      </svg>
    );
  };
  const item = {
    hidden: ([randomX, w, h]) => ({
      x: randomX,
      y: h / 1.7,
      opacity: 0.5
    }),
    visible: ([randomX, w, h]) => ({
      x: randomX,
      y: -h * 1,
      opacity: 1,
      transition: {
        x: { ease: "easeInOut", duration: 15.5 },
        y: { type: "spring", stiffness: 0.42 },
        duration: 25.5
      }
    })
  };
  const container = {
    hidden: { opacity: 1 },
    visible: i => ({
      transition: {
        delay: 0.5,
        staggerChildren: 0.3
      }
    })
  };

  const revealTheSecret = () => {
    let parentWidth = screenRef.current.clientWidth;
    let parentHeight = screenRef.current.clientHeight;
    setScreen({ w: parentWidth, h: parentHeight });
    console.log("reveal", screen, parentWidth, parentHeight);

    toggleOpen();
  };
  useEffect(() => {
    setHeartArr(new Array(50).fill(" "));
  }, [screen]);
  return (
    <>
      <motion.div
        exit={{ opacity: 0, scale: 0 }}
        className="twoCol"
        initial={anim_init_Desktop}
        animate={anim_finish_Desktop}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <motion.div
            className="homeColumn"
            variants={container}
            initial={false}
            animate={isOpen ? "visible" : "hidden"}
            ref={screenRef}
          >
            <h1 aria-label=" Hi, I’m Vlad, web developer." className="headline">
              Hi,
              <br /> I'm Vlad,
              <br /> web developer.
            </h1>
            <h2 className="sub_headline">
              Front End Developer | React.js Enthusiast | JS, HTML,{" "}
              <span onClick={() => revealTheSecret()}>CSS</span>
            </h2>
            <div
              className={`morphoShadow button ${styles.contactButton}`}
              id="contactButton"
            >
              <Link
                href={{
                  pathname: "/contact"
                }}
                as={"/contact"}
              >
                <a
                  style={{
                    color: "#6c63ff",
                    fontWeight: "bold",
                    width: "100%"
                  }}
                >
                  Contact
                </a>
              </Link>
            </div>
            {heartArr.map((el, index) => {
              let screenW = screenRef.current.clientWidth;
              let screenH = screenRef.current.clientHeight;
              let r = Math.floor(Math.random() * screenW) + 1;
              return (
                <motion.div
                  key={index}
                  className={"heartItem"}
                  custom={[r, screenW, screenH]}
                  variants={item}
                >
                  {heart()}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div>
          <Parallax
            typeMotion={
              <Typed
                strings={[textArray]}
                typeSpeed={40}
                //backSpeed={50}
                //loop
              ></Typed>
            }
          />
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;
