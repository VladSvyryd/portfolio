import { Nav } from "../components/nav/Nav";
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
const about = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0 }}
      className="twoCol "
      initial={anim_init_Desktop}
      animate={anim_finish_Desktop}
    >
      <div className="homeColumn about">
        <h1 aria-label="About me" className="headline">
          About me
        </h1>
        <div className="textContainer">
          <p>
            I am a constantly learning, developing and experimenting web
            developer. Open to new ideas and innovative solutions of problems.
          </p>
          <p>
            Well organized, open minded, teamplayer with desire to explore and
            brake barriers. A fan of cinema, table games, workout, TV series,
            guitar player and travel lover.
          </p>
          <p>
            Interested in the entire frontend spectrum as well as free to
            explore and learn backend world. Would like to work on promising
            projeects with positive people and.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "300px"
        }}
      ></div>
    </motion.div>
  );
};

export default about;
