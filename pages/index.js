import Link from "../components/link/link";
import Parallax from "../components/parralax/parallax";
import styles from "../styles/index.module.css";
import Typed from "react-typed";
import { motion } from "framer-motion";

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
  return (
    <>
      <motion.div
        exit={{ opacity: 0, scale: 0 }}
        className="twoCol"
        initial={anim_init_Desktop}
        animate={anim_finish_Desktop}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="homeColumn">
            <h1 aria-label=" Hi, I’m Vlad, web developer." className="headline">
              Hi,
              <br /> I'm Vlad,
              <br /> web developer.
            </h1>
            <h2 className="sub_headline">
              Front End Developer | React.js Enthusiast | JS, HTML, CSS
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
          </div>
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
