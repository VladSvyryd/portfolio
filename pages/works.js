import { useEffect, useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import useWindowSize from "../components/useWindowSize/useWindowSize";
import w from "../styles/works.module.css";
import pic from "../assets/chair.png";
import i1 from "../assets/sail_thumb.jpg";
import i2 from "../assets/saib_thumb.jpg";
import i3 from "../assets/fallbeispiel_thumb.jpg";
import i4 from "../assets/coinTracker_thumb.jpg";
import i5 from "../assets/applepie_thumb.jpg";
import i6 from "../assets/virtuelles_labor_thumb.jpg";
import i7 from "../assets/electron_thumb.jpg";
import i8 from "../assets/wanteat.jpg";
import i1Front from "../assets/sail.png";
import i2Front from "../assets/saib.png";
import i3Front from "../assets/fallbeispiel.png";
import i4Front from "../assets/coinTracker.png";
import i5Front from "../assets/applepie.png";
import i6Front from "../assets/virtuelles_labor.png";
import i7Front from "../assets/saib_electron.png";
import i8Front from "../assets/wanteat_back.png";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const cardBacks = [
  {
    img: i1,
    title: "Sicheres Arbeiten im Labor: Fachinformationen",
    imgFront: i1Front,
    description:
      "Umsetzung eines Flash-basierten Lernprogramm mit modernen Technologien",
    links: [
      "https://sicheresarbeitenimlabor.de/fachinformation-responsiv/kapa/uebersicht_a.htm",
      "https://sicheresarbeitenimlabor.de/fachinformation-responsiv/kapa/uebersicht_b.htm",
      "https://sicheresarbeitenimlabor.de/fachinformation-responsiv/kapa/uebersicht_c.htm",
    ],
    duties: [
      "Erstellung eines Layouts mit Hilfe von Design-Skizzen in Photoshop/ Adobe XD.",
      "Implementierung der Programmarchitektur (mit weit entfernter Betreuung)",
      "Erstellung funktionale Anforderungen des Projektes",
      "Querverweise zwischen drei Teilen des Programms",
      "Erstellung einer Suche",
      "Bearbeitungsstand der Aufgaben und globale Zustand interaktiven Elemente",
    ],
    tech_stack: [
      "JS",
      "HTML",
      "CSS",
      "SASS",
      "jQuery",
      "jQuery UI",
      "Local Storage",
    ],
    dauer: {
      summ: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },
  {
    img: i2,
    title: "Sicheres Befahren von Behältern",
    imgFront: i2Front,
    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    dauer: {
      summ: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },
  {
    img: i3,
    title: "Fallbeispiel 1,2,3",
    imgFront: i3Front,
    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    dauer: {
      summ: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },
  {
    img: i4,
    title: "Coins Tracker",
    imgFront: i4Front,
    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    dauer: {
      summ: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },
  {
    img: i5,
    title: "applepie",
    imgFront: i5Front,
    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    dauer: {
      summ: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },
  {
    img: i6,
    title: "Virtuelles Labor",
    imgFront: i6Front,
    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    dauer: {
      summ: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },

  {
    img: i7,
    title: "Sicheres Arbeiten im Labor",
    imgFront: i7Front,
    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    dauer: {
      summ: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },
  {
    img: i8,
    title: "Want Eat",
    imgFront: i8Front,
    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    dauer: {
      summ: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
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
    console.log(index);
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
        staggerChildren: 0.05,
      },
    },
  };
  const item = {
    closed: { x: "+30%", opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.65, 0.09, 0.46, 1.26],
      },
    },
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
              <div className={w.title}>
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
                  <img src={cardBacks[c - 1] && cardBacks[c - 1].imgFront} />
                </motion.div>
                <motion.div className={w.card_chart}>
                  {cardBacks[c - 1] && cardBacks[c - 1].dauer.summ[0]}
                </motion.div>
                <motion.div className={w.card_title} variants={item}>
                  {cardBacks[c - 1] && cardBacks[c - 1].title}
                </motion.div>
                <motion.div className={w.card_tech_stack} variants={item}>
                  {cardBacks[c - 1] && cardBacks[c - 1].tech_stack}
                </motion.div>
                <motion.div className={w.card_description} variants={item}>
                  {cardBacks[c - 1] && cardBacks[c - 1].description}
                </motion.div>
                <motion.div className={w.card_duties} variants={item}>
                  {cardBacks[c - 1] && cardBacks[c - 1].duties}
                </motion.div>
                <motion.div className={w.card_links} variants={item}>
                  {cardBacks[c - 1] && cardBacks[c - 1].links}
                </motion.div>
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
