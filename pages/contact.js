import { motion } from "framer-motion";
import { useEffect } from "react";
import Form from "../components/form/form";
const Contact = ({ query }) => {
  const anim_init_Desktop = {
    opacity: 0,
    translateX: `${query.x}`,
    translateY: `${query.y}`
  };
  const anim_finish_Desktop = {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      staggerChildren: 0.3
    }
  };
  const item = {
    hidden: anim_param => ({
      translateX: `${anim_param}%`,
      borderRadius: "25%"
    }),
    visible: anim_param => ({
      translateX: "0%",
      borderRadius: "0%",
      transition: {
        delay: 0,
        ease: "easeOut",
        duration: 0.5
      }
    })
  };
  const stagger = {
    animate: {
      transition: {
        delay: 1,
        staggerChildren: 0.2
      }
    }
  };
  useEffect(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    const finalX = window.innerWidth;
    const finalY = window.innerHeight;
  }, []);
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0 }}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", width: "100%" }}
    >
      <motion.div className="twoCol" variants={stagger}>
        <motion.div
          key={1}
          className="homeColumn contact"
          variants={item}
          custom={-100}
        >
          <h1 aria-label="Contact" className="headline">
            Contact me
          </h1>
          <Form />
        </motion.div>
        <motion.div
          key={2}
          variants={item}
          custom={100}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};
Contact.getInitialProps = ({ query }) => {
  return { query };
};
export default Contact;
