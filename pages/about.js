import { Nav } from "../components/nav/Nav";
import { motion } from "framer-motion";

const about = () => {
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
      </div>
    </motion.div>
  );
};

export default about;
