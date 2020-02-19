import { useSpring, animated } from "react-spring";
import styles from "./parallax.module.css";
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
      />
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
