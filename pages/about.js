import { motion } from "framer-motion";
import a from "../styles/about.module.css";
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

const about = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {},
    visible: {
      borderRadius: "15px",
      boxShadow:
        "inset -5px -5px 10px rgba(255, 255, 255, 0.05), inset 2px 2px 5px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 1000
      }
    }
  };
  const guy = {
    hidden: {},
    visible: {
      transition: {
        duration: 1.5,
        stiffness: 1000
      }
    }
  };
  const f = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,

      fill: "#3f3d56",
      transition: {
        duration: 2,
        ease: "easeIn"
      }
    }
  };
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0 }}
      className="twoCol"
      initial={anim_init_Desktop}
      animate={anim_finish_Desktop}
    >
      <div className="homeColumn about">
        <h1 aria-label="About me" className="headline">
          About me
        </h1>
        <div className="textContainer">
          <p>
            I am a constantly learning, exploring and experimenting web
            developer. Open to new ideas and innovative solutions of problems.
          </p>
          <p>
            Well organized, open minded, teamplayer with desire to explore and
            brake barriers. A fan of cinema, music, table games, workout, TV
            series, guitar player and travel lover.
          </p>
          <p>
            Interested in the entire frontend spectrum as well as explore and
            learn backend world. Would like to work on promising projects with
            positive people and improve myself.
          </p>
        </div>
      </div>

      <div className={a.animeContainer}>
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div className={a.animeBox} variants={item}></motion.div>
          <motion.div className={a.guy} variants={guy}>
            <svg
              id="Komponente_1_1"
              data-name="Komponente 1 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="213.481"
              height="544.846"
              viewBox="0 0 213.481 544.846"
            >
              <motion.path
                variants={f}
                initial="hidden"
                animate="visible"
                id="Pfad_61"
                data-name="Pfad 61"
                d="M297.346,797.972s9.312,4.656,15.83,5.587,10.185-5.662,8.817-7.953,4.22-.428,7.944,7.953c0,0,15.83,18.624,25.142,19.555s9.385,13.538,4.656,13.968c-5.122.466-13.968,3.725-25.142,0s-21.417-13.968-26.073-13.968-20.486-7.45-15.83-11.174S297.346,797.972,297.346,797.972Z"
                transform="translate(-272.052 -294)"
              />
              <path
                id="Pfad_62"
                data-name="Pfad 62"
                d="M389.124,819.011a51.716,51.716,0,0,0,14.208-.872c6.4-1.555,7.355-9.038,5.235-10.657s3.759-1.964,10.329,4.436c0,0,21.612,11.417,30.6,8.826s13.739,9.087,9.508,11.242a53.949,53.949,0,0,1-23.325,6.581c-11.759.689-25.093-2.269-29.416-.541s-21.788.687-18.847-4.5S389.124,819.011,389.124,819.011Z"
                transform="translate(-272.052 -294)"
                fill="#3f3d56"
              />
              <circle
                id="Ellipse_35"
                data-name="Ellipse 35"
                cx="36.317"
                cy="36.317"
                r="36.317"
                transform="translate(64.925 8.199)"
                fill="#ffc1c7"
              />
              <path
                id="Pfad_63"
                data-name="Pfad 63"
                d="M344.892,352.95s5.587,39.11-7.45,44.7,66.115,3.725,66.115,3.725-11.174-35.385-8.381-44.7S344.892,352.95,344.892,352.95Z"
                transform="translate(-272.052 -294)"
                fill="#ffc1c7"
              />
              <path
                id="Pfad_64"
                data-name="Pfad 64"
                d="M331.856,575.505s-2.794,70.771-5.587,78.22-5.587,57.734-5.587,57.734l-24.211,91.257,22.349,7.45s30.729-54.01,34.454-60.528S386.8,638.826,386.8,638.826,384,703.078,384,724.5s5.587,99.638,5.587,99.638l17.693-1.862,23.28-98.706S464.085,590.4,441.736,575.5,331.856,575.505,331.856,575.505Z"
                transform="translate(-272.052 -294)"
                fill="#2f2e41"
              />
              <path
                id="Pfad_65"
                data-name="Pfad 65"
                d="M467.81,597.853s.931,54.009-10.243,45.628,0-50.284,0-50.284Z"
                transform="translate(-272.052 -294)"
                fill="#ffc1c7"
              />
              <path
                id="Pfad_66"
                data-name="Pfad 66"
                d="M313.232,579.229s.931,54.009-10.243,45.628,0-50.284,0-50.284Z"
                transform="translate(-272.052 -294)"
                fill="#ffc1c7"
              />
              <path
                id="Pfad_67"
                data-name="Pfad 67"
                d="M450.117,421.858s-18.624-21.417-34.454-18.624S313.232,405.1,313.232,405.1s-28.867,36.316-21.417,43.766,31.66,139.679,31.66,139.679,64.252-8.381,86.6-8.381,31.66-3.725,31.66-3.725-29.8-59.6-15.83-86.6,34.454-55.872,34.454-55.872Z"
                transform="translate(-272.052 -294)"
                fill="#6c63ff"
              />
              <path
                id="Pfad_68"
                data-name="Pfad 68"
                d="M444.53,428.376l15.83,5.587s9.312,32.592,9.312,58.665.931,39.11,4.656,48.422,15.83,53.078,9.312,62.39A62.1,62.1,0,0,1,470.6,617.408l-21.417-1.862s-.931-30.729-6.518-33.523-13.037-20.486-13.037-20.486-17.693-56.8-6.518-75.427S444.53,428.376,444.53,428.376Z"
                transform="translate(-272.052 -294)"
                fill="#6c63ff"
              />
              <path
                id="Pfad_69"
                data-name="Pfad 69"
                d="M384.934,462.83s9.312-40.973-8.381-39.11-41.9,2.794-48.422,2.794-43.766-4.656-49.353,19.555-13.037,54.009,2.794,72.633c0,0,5.587,81.945,27,87.532s78.22,12.106,98.706-14.9,12.105-56.8,12.105-56.8h-9.312Z"
                transform="translate(-272.052 -294)"
                fill="#3f3d56"
              />
              <path
                id="Pfad_70"
                data-name="Pfad 70"
                d="M248.163,475.927l7.449-50.285-3.724,52.147Z"
                transform="translate(-104.552 -233.532)"
                fill="#3f3d56"
              />
              <path
                id="Pfad_71"
                data-name="Pfad 71"
                d="M290.883,525.22s15.83,7.45,48.422,2.794v13.968l-48.422-3.725Z"
                transform="translate(-272.052 -294)"
                opacity="0.1"
              />
              <path
                id="Pfad_72"
                data-name="Pfad 72"
                d="M208.587,362.787,232.8,349.75l-20.486,17.693Z"
                transform="translate(-104.552 -233.532)"
                fill="#3f3d56"
              />
              <path
                id="Pfad_73"
                data-name="Pfad 73"
                d="M427.768,409.752s18.624,6.518,18.624,0-16.762-12.105-27-15.83-58.665-9.312-66.115-12.105-42.835-7.45-45.628,3.725S303.919,420,317.887,422.789,368.172,418.133,386.8,420,427.768,409.752,427.768,409.752Z"
                transform="translate(-272.052 -294)"
                fill="#6c63ff"
              />
              <path
                id="Pfad_74"
                data-name="Pfad 74"
                d="M427.768,409.752s18.624,6.518,18.624,0-16.762-12.105-27-15.83-58.665-9.312-66.115-12.105-42.835-7.45-45.628,3.725S303.919,420,317.887,422.789,368.172,418.133,386.8,420,427.768,409.752,427.768,409.752Z"
                transform="translate(-272.052 -294)"
                opacity="0.1"
              />
              <path
                id="Pfad_75"
                data-name="Pfad 75"
                d="M130.367,370.236l6.329-13.294,1.121,16.088Z"
                transform="translate(-104.552 -233.532)"
                fill="#3f3d56"
              />
              <ellipse
                id="Ellipse_36"
                data-name="Ellipse 36"
                cx="34"
                cy="39.5"
                rx="34"
                ry="39.5"
                transform="translate(60.948 3)"
                fill="#2f2e41"
              />
              <ellipse
                id="Ellipse_37"
                data-name="Ellipse 37"
                cx="34"
                cy="21.5"
                rx="34"
                ry="21.5"
                transform="translate(66.948)"
                fill="#2f2e41"
              />
              <ellipse
                id="Ellipse_38"
                data-name="Ellipse 38"
                cx="3.5"
                cy="6"
                rx="3.5"
                ry="6"
                transform="translate(123.948 48)"
                fill="#ffc1c7"
              />
              <path
                id="Pfad_76"
                data-name="Pfad 76"
                d="M394.618,310.086c3.577-1.958,6.632-5.5,8.92-10.332a10.9,10.9,0,0,1,.179,3.27,12.383,12.383,0,0,0,4.258-1.284l-.319,3.486a35.953,35.953,0,0,0,7.029-5.628,27.674,27.674,0,0,1-2.462,14.858c-1.855,3.663-4.376,6.046-6.871,8.393"
                transform="translate(-272.052 -294)"
                fill="#2f2e41"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default about;
