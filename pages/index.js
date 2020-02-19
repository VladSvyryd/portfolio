import { Nav } from "../components/nav/Nav";
import Parallax from "../components/parralax/parallax";
import { motion } from "framer-motion";

function HomePage({ pages }) {
  return (
    <>
      <motion.div
        className="twoCol"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0, translateY: "+100%" }}
        animate={{ opacity: 1, translateY: "0%" }}
      >
        <div>
          <Nav />
        </div>
        <div>
          <Parallax />
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;
