import Link from "../components/link/link";
import { useRouter } from "next/router";
import Parallax from "../components/parralax/parallax";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/index.module.css";

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
const anim_init_Mobile = {
  opacity: 0,
  translateX: "+100%"
};
const anim_finish_Mobile = { opacity: 1, translateX: "0%" };

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
            <h1 aria-label=" Hi, I’m Vlad,web developer." className="headline">
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
          <Parallax />
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;
