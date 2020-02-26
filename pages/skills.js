import { motion } from "framer-motion";
import skill from "../styles/skills.module.css";
const anim_init_Desktop = {
  opacity: 0,
  translateX: "+100%"
};
const anim_finish_Desktop = {
  opacity: 1,
  translateX: "0%",
  transition: {
    duration: 1
  }
};
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      duration: 0.5,
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: { y: 20, scale: 0 },
  visible: { y: 0, scale: 1 }
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
              semantic-ui, Angular Material, Onsen UI. My development is
              reinforced by basic knowledge of software version control system
              Git.
            </p>
            <p>
              I have also full-stack experience as small Projects on Back End
              working with Node.js, SQL.
            </p>
            <p>
              Visit my{" "}
              <a
                href="https://www.linkedin.com/in/vlad-s-1b2112a6/"
                target="_blank"
                className="externalLink"
              >
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
            justifyContent: "center",
            position: "relative"
          }}
        >
          <motion.div
            variants={container}
            className={` ${skill.grid}`}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={item}
              className={`${skill.js} ${skill.icon}`}
            />
            <motion.div
              variants={item}
              className={`${skill.css} ${skill.icon}`}
            />
            <motion.div
              variants={item}
              className={`${skill.html} ${skill.icon}`}
            />
            <motion.div
              variants={item}
              className={`${skill.next} ${skill.icon}`}
            />
            <motion.div
              variants={item}
              className={`${skill.react} ${skill.icon}`}
            />
            <motion.div
              variants={item}
              className={`${skill.angular} ${skill.icon}`}
            />
            <motion.div
              variants={item}
              className={`${skill.jQuery} ${skill.icon}`}
            />
            <motion.div
              variants={item}
              className={`${skill.electron} ${skill.icon}`}
            />
            <motion.div
              variants={item}
              className={`${skill.sass} ${skill.icon}`}
            />
            <motion.div
              variants={item}
              className={`${skill.ts} ${skill.icon}`}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
export default skills;
