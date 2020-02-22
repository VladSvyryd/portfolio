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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ullam
            eum quo saepe vitae animi ex, voluptatem nostrum! Voluptatibus
            debitis quo aspernatur quidem sequi voluptatum est laborum quia
            delectus ipsa?
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
