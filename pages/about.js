import { Nav } from "../components/nav/Nav";
import { motion } from "framer-motion";

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
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      className="twoCol"
    >
      <div>
        <Nav />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "300px"
        }}
      >
        <div>This is About</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          sapiente minima itaque qui at illum aperiam praesentium iure enim
          similique cupiditate odio, ab fugiat fuga dignissimos amet voluptatum
          ea ad.
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            variants={icon}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default about;
