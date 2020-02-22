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
const skills = () => {
  return (
    <>
      <motion.div
        exit={{ opacity: 0, scale: 0 }}
        className="twoCol "
        initial={anim_init_Desktop}
        animate={anim_finish_Desktop}
      >
        <div className="homeColumn skills ">
          <h1 aria-label="Skills" className="headline">
            Skills
          </h1>
          <div className="textContainer">
            <p>
              Front End developer with experience building responsive websites
              and web applications.
            </p>
            <p>
              I specialize in JavaScript (TypeScript) and have experience
              working with React.js and Angular. On the client side I am
              proficient in HTML, CSS, SASS and popular frameworks: bootstrap,
              semantic-ui, Angular Material, Onsen UI.
            </p>
            <p>
              I have also full-stack experience with small Projects on Back End
              working with Node.js, SQL.
            </p>
            <p>
              Visit my{" "}
              <a href="/" className="externalLink">
                LinkedIn
              </a>{" "}
              profile for more details or{" "}
              <a href="/contact" className="externalLink">
                contact
              </a>{" "}
              me.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        ></div>
      </motion.div>
    </>
  );
};
export default skills;
