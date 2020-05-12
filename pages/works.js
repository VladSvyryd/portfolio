import { useState, useEffect, useRef, useMemo } from "react";
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
  const [forAlex, setForAlex] = useState(true);
  const handleHoverStart = (index) => {
    setScaleFront((oldState) => {
      return {
        ...oldState,
        [`card${index}`]: {
          clipPath: `${
            wind.width <= 740
              ? "circle(100% at 50% 30%)"
              : "circle(100% at 50% 13%)"
            }`,
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
    const gRef = gridRef.current.getBoundingClientRect();
    const distanceToFirstCardX = box.x - gRef.x;

    const distanceToFirstCardY = gRef.y - box.y + (wind.width >= 1024 ? 30 : 0);

    const modalHeight =
      parseInt(gRef.height - gRef.y) - (wind.width >= 1024 ? 60 : 0);
    const modalWidth = parseInt(gRef.width - (wind.width >= 1024 ? 30 : 5));
    setScaleFront((oldState) => {
      return {
        ...oldState,
        [`card${index}`]: {
          // clipPath: `circle(100% at 50% 0)`,
          height: `${modalHeight}px`,
          width: `${modalWidth}px`,
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
    closed: {
      opacity: 1,
      paddingLeft: "0px",
      paddingTop: "15px",
      paddingRight: "0px",
      paddingBottom: "15px",
    },
    open: {
      opacity: 1,
      paddingLeft: "15px",
      paddingTop: "15px",
      paddingRight: "15px",
      paddingBottom: "15px",
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
    closed: ([_, w = 400]) => ({
      width: `${w}px`,
    }),
    open: ([w = 300, _]) => ({
      width: `${wind.width <= 520 ? `100%` : `${w}px`}`,
      transition: {
        ease: [0.65, 0.09, 0.46, 1.26],
      },
    }),
  };
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [wind, setWind] = useState(0);
  useEffect(() => {
    setWind({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0 }}
      className={w.grid}
      initial={anim_init_Desktop}
      animate={anim_finish_Desktop}
      ref={gridRef}
      style={{
        overflowY: `${
          wind.width <= 740 && activeCard > 0 ? "hidden" : "initial"
          }`,
      }}
    >
      {cards.map((c, i) => (
        <motion.div
          key={c}
          onHoverStart={() =>
            activeCard <= 0 && wind.width >= 740 && handleHoverStart(c)
          }
          onHoverEnd={() =>
            activeCard <= 0 && wind.width >= 740 && handleHoverEnd(c)
          }
          onClick={(e) => activeCard <= 0 && handleClick(e, c)}
          onTouchEnd={(e) =>
            activeCard <= 0 && handleHoverStart(c) && handleClick(e, c)
          }
          className={w.grid_item}
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
            <motion.div
              animate={scaleFront[`card${c}`]}
              className={w.back}
              style={{
                overflowY: `${
                  wind.width <= 740 && activeCard > 0 ? "auto" : "hidden"
                  }`,
              }}
            >
              <motion.div
                className={w.card_grid}
                variants={card_container}
                animate={isOpen ? "open" : "closed"}
              >
                <motion.div className={w.card_img}>
                  <motion.img
                    variants={img}
                    custom={[
                      cardBacks[c - 1].imgFrontMaxWidth,
                      cardBacks[c - 1].imgBackWidth
                        ? cardBacks[c - 1].imgBackWidth
                        : 400,
                    ]}
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

                  {activeCard > 0 && (
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
                  )}
                  <motion.div className={w.card_description} variants={item}>
                    <p>
                      <b>Description:</b>
                    </p>
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
                  {activeCard > 0 && (
                    <motion.div className={w.card_links} variants={item}>
                      <p>
                        <b>Links:</b>
                      </p>
                      <motion.div className={w.links_container} variants={item}>
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
                    </motion.div>
                  )}
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

const MobileCards = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const myRef = useRef();

  const handleScroll = (e) => {
    const card = myRef.current.getBoundingClientRect();
    console.log({ e }, { card });
  };

  return (
    <div
      style={{ height: "100%", overflowY: "auto" }}
      onScroll={(e) => {
        handleScroll(e);
      }}
    >
      {arr.map((i) => (
        <div
          key={"my" + i}
          ref={i == 5 ? myRef : null}
          style={{
            width: "300px",
            height: "200px",
            background: "yellow",
            marin: "20px",
          }}
        >
          {i}
        </div>
      ))}
    </div>
  );
};
export default works;
