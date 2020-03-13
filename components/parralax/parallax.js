import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./parallax.module.css";
import { motion, useCycle } from "framer-motion";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 + 117}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 6 + 75}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 6.5 + 380}px,${y / 6.5 + 260}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 8 + 165}px,${y / 8 - 92}px,0)`;

const initialAnimationConfig = { mass: 10, tension: 1050, friction: 140 };
const Parallax = props => {
  const [propsxy, set] = useSpring(() => ({
    xy: [0, 0],
    config: initialAnimationConfig
  }));

  const [si, setsi] = useState("");
  const [inputState, setInputState] = useState(true);
  const [startLongPress, setStartLongPress] = useState(false);
  const [screen, setScreen] = useState({ w: 100, h: 200 });
  const handleClicked = () => {
    toggleOpen();
    startLongPress(old => !old);
  };
  const isDown = ({ currentTarget }) => {
    currentTarget.style = "filter: drop-shadow(0px 0px 16px rgb(255, 0, 0));";
  };
  const isUp = ({ currentTarget }) => {
    currentTarget.style = "filter: 0;";
  };
  const callback = () => {
    toggleOpen();
  };
  const revealTheSectret = e => {
    e.preventDefault();
    console.log(si);
    if (si === "Lada") {
      toggleOpen();
    }
  };
  const inputRef = useRef(null);

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
        window.innerWidth >= 1200 &&
        set({ xy: calc(x, y), config: initialAnimationConfig })
      }
      onMouseLeave={() =>
        window.innerWidth >= 1200 &&
        set({ xy: [0, 0], config: { mass: 10, tension: 1050, friction: 40 } })
      }
    >
      <animated.div
        className={styles.card1}
        style={{ transform: propsxy.xy.interpolate(trans1) }}
      />
      <animated.div
        className={styles.card2}
        style={{ transform: propsxy.xy.interpolate(trans2) }}
      >
        <div className={styles.heartScreen}>
          <div className={styles.typed}>{props.typeMotion}</div>
        </div>
      </animated.div>

      <animated.div
        className={styles.card3}
        style={{ transform: propsxy.xy.interpolate(trans3) }}
      />
      <animated.div
        className={styles.card4}
        style={{ transform: propsxy.xy.interpolate(trans4) }}
      />
    </div>
  );
};
export default Parallax;
