import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./parallax.module.css";
import { motion, useCycle } from "framer-motion";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 + 117}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 6 + 75}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 6.5 + 420}px,${y / 6.5 + 260}px,0)`;
const initialAnimationConfig = { mass: 10, tension: 1050, friction: 140 };
const Parallax = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: initialAnimationConfig
  }));

  const [si, setsi] = useState("");
  const [inputState, setInputState] = useState(true);
  const [startLongPress, setStartLongPress] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const isDown = ({ currentTarget }) => {
    currentTarget.style =
      " background: red;  box-shadow: 0 0 15px 6px #ef2222;";
    setStartLongPress(true);
  };
  const isUp = ({ currentTarget }) => {
    currentTarget.style = " background: transperent; box-shadow: 0px 0px 0px";
    setStartLongPress(false);
  };
  const callback = () => {
    setInputState(false);
    inputRef.current.focus();
    console.log("triggered");
  };
  const revealTheSectret = e => {
    e.preventDefault();
    console.log(si);
    if (si === "Lada") {
      toggleOpen();
    }
  };
  const inputRef = useRef(null);

  const heart = () => {
    return (
      <svg
        className="heart"
        height="18pt"
        viewBox="0 -20 464 464"
        width="18pt"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
          fill="#ff6243"
        />
        <path
          d="m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0"
          fill="#ff5023"
        />
      </svg>
    );
  };
  const item = {
    hidden: { y: 125, x: 85, opacity: 0.5 },
    visible: ([index, randomX]) => ({
      y: -25,
      x: randomX - 20,
      opacity: 1,
      transition: {
        duration: 1.5
      }
    })
  };
  const container = {
    hidden: { opacity: 1 },
    visible: i => ({
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.3
      }
    })
  };
  const handleChange = value => {
    console.log(value);
    setsi(value);
  };
  useEffect(() => {
    let timerId;
    if (startLongPress) {
      timerId = setTimeout(callback, 3000);
    } else {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [startLongPress]);
  return (
    <div
      className={styles.container}
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xy: calc(x, y), config: initialAnimationConfig })
      }
      onMouseLeave={() =>
        set({ xy: [0, 0], config: { mass: 10, tension: 1050, friction: 40 } })
      }
    >
      <animated.div
        className={styles.card1}
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className={styles.card2}
        style={{ transform: props.xy.interpolate(trans2) }}
      >
        <div
          className={styles.secret}
          onMouseDown={e => isDown(e)}
          onMouseUp={e => isUp(e)}
          onMouseLeave={e => isUp(e)}
        >
          <form onSubmit={revealTheSectret}>
            <input
              className={styles.secretInput}
              type="text"
              value={si}
              ref={inputRef}
              disabled={inputState}
              onChange={event => handleChange(event.target.value)}
            />
          </form>
        </div>
        <motion.div
          className={styles.heartScreen}
          variants={container}
          initial={false}
          animate={isOpen ? "visible" : "hidden"}
        >
          {new Array(100).fill(" ").map((el, index) => {
            let r = Math.floor(Math.random() * 200) + 1;
            return (
              <motion.div
                key={index}
                className={styles.heartItem}
                custom={[index, r]}
                variants={item}
              >
                {heart()}
              </motion.div>
            );
          })}
        </motion.div>
      </animated.div>
      <animated.div
        className={styles.card3}
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        className={styles.card4}
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </div>
  );
};
export default Parallax;
