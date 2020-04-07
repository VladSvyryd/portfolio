import { useEffect, useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import useWindowSize from "../components/useWindowSize/useWindowSize";
import w from "../styles/works.module.css";
import pic from "../assets/chair.png";
import i1 from "../assets/sail.jpg";
import i1Front from "../assets/sail_front.jpg";

const cards = [1, 2, 3, 4, 5, 6];
const cardBacks = [
  {
    img: i1,
    title: "Sicheres Arbeiten im Labor",
    imgFront: i1Front,
  },
];

const works = () => {
  const gridRef = useRef(null);
  const firstCard = useRef(null);
  const anim_init_Desktop = {
    opacity: 0,
    scale: 0,
  };
  const anim_finish_Desktop = {
    opacity: 1,
    scale: 1,
  };

  const [rotateFront, setRotateFront] = useState({
    card1: { rotateY: 0 },
    card2: { rotateY: 0 },
    card3: { rotateY: 0 },
    card4: { rotateY: 0 },
    card5: { rotateY: 0 },
    card6: { rotateY: 0 },
  });
  const [scaleFront, setScaleFront] = useState({
    card1: {},
    card2: {},
    card3: {},
    card4: {},
    card5: {},
    card6: {},
  });

  const handleHoverStart = (index) => {
    setScaleFront((oldState) => {
      return {
        ...oldState,
        [`card${index}`]: {
          clipPath: `circle(100% at 50% 13%)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
          },
        },
      };
    });
    setRotateFront((oldState) => {
      return {
        ...oldState,
        [`card${index}`]: {
          rotateY: 180,
          zIndex: 10,
          transition: {
            type: "spring",
            damping: 5,
            mass: 0.5,
            stiffness: 100,
          },
        },
      };
    });
  };
  const handleHoverEnd = (index) => {
    handleCloseModal(index);
    setRotateFront((oldState) => {
      return {
        ...oldState,

        [`card${index}`]: {
          rotateY: 0,
          zIndex: 0,
          transition: {
            //delay: 0.5,
            type: "spring",
            damping: 5,
            mass: 0.5,
            stiffness: 100,
          },
        },
      };
    });

    setActiveCard(0);
  };
  const handleCloseModal = (index) => {
    setScaleFront((oldState) => {
      return {
        ...oldState,
        [`card${index}`]: {
          clipPath: `circle(0% at 50% 0)`,
          width: "400px",
          height: "300px",
          right: 0,
          top: 0,
          transition: {
            duration: 0.5,
          },
        },
      };
    });
  };
  const [activeCard, setActiveCard] = useState();
  const handleClick = (event, index) => {
    setActiveCard(index);

    var elem = event.target;
    var box = elem.getBoundingClientRect();
    const fCard = firstCard.current.getBoundingClientRect();
    const gRef = gridRef.current.getBoundingClientRect();
    const diffX = fCard.x - gRef.x / 2;
    const diffY = fCard.y / 2.5 - gRef.y;
    console.log({ fCard }, elem);
    const distanceToFirstCardX = box.x - diffX;
    const distanceToFirstCardY = diffY - box.y;
    console.log({ distanceToFirstCardX, distanceToFirstCardY, gRef });
    console.log(elem);
    setScaleFront((oldState) => {
      return {
        ...oldState,
        [`card${index}`]: {
          // clipPath: `circle(100% at 50% 0)`,
          height: `${parseInt(gRef.height - fCard.y)}px`,
          width: `${parseInt(gRef.width - 60)}px`,
          right: -distanceToFirstCardX, // sides are reversed
          top: distanceToFirstCardY,
          pointerEvents: "none",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
          },
        },
      };
    });
  };

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0 }}
      className={w.grid}
      initial={anim_init_Desktop}
      animate={anim_finish_Desktop}
      ref={gridRef}
    >
      {cards.map((c, i) => (
        <motion.div
          key={c}
          onHoverStart={() => handleHoverStart(c)}
          onHoverEnd={() => handleHoverEnd(c)}
          onClick={(e) => handleClick(e, c)}
          className={w.grid_item}
          ref={c == 1 ? firstCard : null}
          style={{ perspective: `${activeCard == c ? "1001px" : "1000"}` }}
        >
          <motion.div
            animate={rotateFront[`card${c}`]}
            className={w.grid_item_inner}
          >
            <div className={w.front}>
              <img src={cardBacks[c - 1] && cardBacks[c - 1].img} alt="" />
              <div>
                <p>{cardBacks[c - 1] && cardBacks[c - 1].title}</p>
              </div>
            </div>
            <motion.div animate={scaleFront[`card${c}`]} className={w.back}>
              <img src={cardBacks[c - 1] && cardBacks[c - 1].imgFront} />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default works;
