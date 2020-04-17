import { useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import HistogramChart from "../components/histogram/histogramChart";
import w from "../styles/works.module.css";
import Morpho_button from "../components/morpho_button/morpho_button";
import cardsData from "../data/data";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const cardBacks = cardsData;

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
            duration: 0.8,
            type: "tween",
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
            type: "tween",
          },
        },
      };
    });
  };
  const handleHoverEnd = (index) => {
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
    setScaleFront((oldState) => {
      return {
        ...oldState,
        [`card${index}`]: {
          clipPath: `circle(0% at 50% 0)`,
          width: "100%",
          height: "100%",
          right: 0,
          top: 0,
          transition: {
            duration: 0.5,
          },
        },
      };
    });
  };
  const handleCloseModal = (index) => {
    toggleOpen();

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
    setScaleFront((oldState) => {
      return {
        ...oldState,
        [`card${index}`]: {
          clipPath: `circle(0% at 50% 0)`,
          width: "100%",
          height: "100%",
          right: 0,
          top: 0,
          transition: {
            duration: 0.5,
          },
        },
      };
    });
    setActiveCard(0);
  };
  const [activeCard, setActiveCard] = useState(0);
  const handleClick = (event, index) => {
    setActiveCard(index);
    toggleOpen();
    var elem = event.currentTarget;
    var box = elem.getBoundingClientRect();
    const fCard = firstCard.current.getBoundingClientRect();
    const gRef = gridRef.current.getBoundingClientRect();
    console.log(event.currentTarget);
    // const diffX = fCard.x - gRef.x / 2;
    // const diffY = fCard.y / 2.5 - gRef.y;
    const distanceToFirstCardX = box.x - gRef.x;
    const distanceToFirstCardY = gRef.y - box.y + 30;
    console.log({ distanceToFirstCardX });
    setScaleFront((oldState) => {
      return {
        ...oldState,
        [`card${index}`]: {
          // clipPath: `circle(100% at 50% 0)`,
          height: `${parseInt(gRef.height - gRef.y) - 60}px`,
          width: `${parseInt(gRef.width - 30)}px`,
          right: -distanceToFirstCardX, // sides are reversed
          top: distanceToFirstCardY,
          transition: {
            ease: "circOut",
          },
        },
      };
    });
  };
  const card_container = {
    closed: { opacity: 1 },
    open: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.052,
      },
    },
  };
  const item = {
    closed: { x: "+30%", opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.65, 0.09, 0.46, 1.26],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const img = {
    closed: (w = 300) => ({ width: "400px" }),
    open: (w = 300) => ({
      width: "100%",
      transition: {
        ease: [0.65, 0.09, 0.46, 1.26],
      },
    }),
  };
  const [isOpen, toggleOpen] = useCycle(false, true);

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
          onHoverStart={() => activeCard <= 0 && handleHoverStart(c)}
          onHoverEnd={() => activeCard <= 0 && handleHoverEnd(c)}
          onClick={(e) => activeCard <= 0 && handleClick(e, c)}
          onTouchEnd={(e) =>
            activeCard <= 0 && handleHoverStart(c) && handleClick(e, c)
          }
          className={w.grid_item}
          ref={c == 1 ? firstCard : null}
          style={{ perspective: `${activeCard == c ? "none" : "1000px"}` }}
        >
          <motion.div
            animate={rotateFront[`card${c}`]}
            className={w.grid_item_inner}
          >
            <div className={w.front}>
              <img src={cardBacks[c - 1] && cardBacks[c - 1].img} alt="" />
              <div className={w.title + " " + "test"}>
                <p>{cardBacks[c - 1] && cardBacks[c - 1].title}</p>
              </div>
            </div>
            <motion.div animate={scaleFront[`card${c}`]} className={w.back}>
              <motion.div
                className={w.card_grid}
                variants={card_container}
                initial="closed"
                animate="open"
                animate={isOpen ? "open" : "closed"}
              >
                <motion.div className={w.card_img}>
                  <motion.img
                    variants={img}
                    src={cardBacks[c - 1] && cardBacks[c - 1].imgFront}
                  />
                </motion.div>
                <motion.div className={w.card_chart}>
                  <HistogramChart
                    date={cardBacks[c - 1].timestamp}
                    id={`canvas${c}`}
                  />
                </motion.div>
                <div className={w.card_info}>
                  <motion.div className={w.card_title} variants={item}>
                    <p>{cardBacks[c - 1] && cardBacks[c - 1].title}</p>
                  </motion.div>
                  <motion.div className={w.card_tech_stack} variants={item}>
                    {cardBacks[c - 1] &&
                      cardBacks[c - 1].tech_stack.map((t, i) => (
                        <a
                          key={`${t}-${i}`}
                          href={t.link}
                          target="_blank"
                          className={w.card_chip}
                        >
                          {t.name}
                        </a>
                      ))}
                  </motion.div>
                  <motion.div className={w.card_description} variants={item}>
                    <p> {cardBacks[c - 1] && cardBacks[c - 1].description}</p>
                  </motion.div>
                  <motion.div className={w.card_duties} variants={item}>
                    <p>
                      <b>Duties:</b>
                    </p>
                    {cardBacks[c - 1] &&
                      cardBacks[c - 1].duties.map((d, i) => (
                        <motion.div
                          key={`duty${c}-${i}`}
                          className={w.card_chip}
                          variants={item}
                        >
                          {d}
                        </motion.div>
                      ))}
                  </motion.div>
                  <motion.div className={w.card_links} variants={item}>
                    <p>
                      <b>Links:</b>
                    </p>
                    {cardBacks[c - 1] &&
                      cardBacks[c - 1].links.map((l, i) => (
                        <motion.a
                          href={l.link}
                          key={i}
                          target="_blank"
                          className={w.card_chip}
                          variants={item}
                        >
                          {l.name}
                        </motion.a>
                      ))}
                  </motion.div>
                </div>
                {
                  <span
                    className={w.close}
                    onClick={() => handleCloseModal(c)}
                    style={{
                      visibility: `${activeCard !== c ? "hidden" : "visible"}`,
                    }}
                  >
                    &#10006;
                  </span>
                }
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default works;
