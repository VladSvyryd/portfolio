import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { shuffle } from "lodash";
import dynamic from "next/dynamic";
const NoSSRComponent = dynamic(
  () => import("../components/particlesFont/particlesFont"),
  {
    ssr: false
  }
);
import a from "../styles/about.module.css";
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

const about = () => {
  const parent = useRef(null);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const [canvas, setCanvas] = useState({ width: 825, height: 754 });
  useEffect(() => {
    setCanvas({
      width: parent.current.clientWidth,
      height: parent.current.clientHeight
    });
  }, []);
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0 }}
      className="twoCol"
      initial={anim_init_Desktop}
      animate={anim_finish_Desktop}
    >
      <div className="homeColumn about">
        <h1
          aria-label="About me"
          className="headline"
          onClick={() => setIcons(shuffle(icons))}
        >
          About me
        </h1>
        <div className="textContainer">
          <p>
            I am a constantly learning, exploring and experimenting web
            developer. Open to new ideas and innovative solutions of problems.
          </p>
          <p>
            Well organized, open minded, teamplayer with desire to explore and
            brake barriers. A fan of cinema, music, table games, workout, TV
            series, guitar player and travel lover.
          </p>
          <p>
            Interested in the entire frontend spectrum as well as explore and
            learn backend world. Would like to work on promising projects with
            positive people and improve myself.
          </p>
        </div>
      </div>

      <div className={a.animeContainer + " about"} ref={parent}>
        <NoSSRComponent width={canvas.width} height={canvas.height} />
      </div>
    </motion.div>
  );
};

export default about;
