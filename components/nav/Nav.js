import styles from "./nav.module.css";
import Link from "../link/link";
import Morpho_button from "../morpho_button/morpho_button";
import { motion } from "framer-motion";
import { useState } from "react";

export const Nav = ({ theme, switchTheme }) => {
  const [hover, setHover] = useState(false)
  const handleSwitcher = () => {
    switchTheme(old => !old)
  }
  const glu = {
    off: {
      pathLength: 0,
      fill: "rgba(255, 209, 92, 0)"
    },
    on: {
      pathLength: 1,
      fill: "rgba(255, 209, 92, 1)"
    }
  }
  const rays = {
    off: {
      pathLength: 0,
      fill: "rgba(255, 209, 92,0)"
    },
    on: {
      pathLength: 1,
      fill: "rgba(255, 209, 92, 1)"
    }
  }
  const handleHover = () => {
    setHover(true)
  }
  const handleHoverLeave = () => {
    setHover(false)
  }
  const container = {
    off: { opacity: 1 },
    on: {
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };
  return (
    <div className={`${styles.navigation} ${theme ? styles.lightsOn : null}`}>

      <Morpho_button >
        <motion.div variants={container} initial="off"
          animate={hover ? "on" : "off"} onClick={() => handleSwitcher()} style={{ margin: "15px auto", cursor: "pointer", position: "absolute", left: "0", top: "-66px" }} onMouseOver={() => handleHover()} onMouseLeave={() => handleHoverLeave()}>
          <svg version="1.1" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 512 512"  >
            <motion.path variants={glu}
              initial="off"
              animate={theme ? "on" : "off"} d="M314.667,391.467c6.4-21.333,19.2-40.533,36.267-55.467c32-26.667,52.267-67.2,52.267-112
	c0-83.2-69.333-151.467-154.667-147.2C172.8,80,110.933,144,108.8,219.733C107.733,266.667,128,308.267,161.067,336
	C179.2,350.933,192,370.133,198.4,391.467L314.667,391.467L314.667,391.467z"/>
            <path fill="#FFFFFF" d="M242.133,393.6h9.6l-42.667-158.933c1.067,0,2.133,0,3.2,0c5.333,0,10.667-2.133,14.933-6.4
	c2.133-2.133,4.267-3.2,7.467-3.2c3.2,0,5.333,1.067,7.467,3.2c7.467,8.533,20.267,8.533,27.733,0c2.133-2.133,4.267-3.2,7.467-3.2
	c2.133,0,5.333,1.067,7.467,3.2c4.267,4.267,8.533,6.4,14.933,6.4c1.067,0,2.133,0,3.2,0l-41.6,158.933h9.6l43.733-166.4
	c0-2.133,0-4.267-2.133-5.333c-2.133-1.067-4.267,0-5.333,1.067c-2.133,2.133-4.267,3.2-6.4,3.2c-3.2,0-5.333-1.067-8.533-3.2
	c-4.267-4.267-8.533-6.4-13.867-6.4s-9.6,2.133-13.867,6.4s-10.667,4.267-14.933,0c-3.2-4.267-8.533-6.4-13.867-6.4l0,0
	c-5.333,0-10.667,2.133-13.867,6.4c-2.133,2.133-5.333,3.2-8.533,3.2c-2.133,0-5.333-1.067-6.4-3.2
	c-1.067-1.067-3.2-2.133-5.333-1.067c-2.133,1.067-3.2,3.2-2.133,5.333L242.133,393.6z"/>
            <g>
              <path fill="#e33efe" d="M222.933,489.6C228.267,502.4,241.067,512,256,512c14.933,0,27.733-9.6,33.067-22.4H222.933z" />
              <path fill="#344A5E" d="M295.467,490.667H217.6c-10.667,0-19.2-8.533-19.2-19.2V390.4h116.267v81.067
		C314.667,482.133,306.133,490.667,295.467,490.667z"/>
            </g>
            <g>
              <path fill="#415A6B" d="M313.6,430.933H198.4c-6.4,0-11.733-5.333-11.733-11.733l0,0c0-6.4,5.333-11.733,11.733-11.733
		h115.2c6.4,0,11.733,5.333,11.733,11.733l0,0C325.333,425.6,320,430.933,313.6,430.933z"/>
              <path fill="#415A6B" d="M313.6,468.267H198.4c-6.4,0-11.733-5.333-11.733-11.733l0,0c0-6.4,5.333-11.733,11.733-11.733
		h115.2c6.4,0,11.733,5.333,11.733,11.733l0,0C325.333,462.933,320,468.267,313.6,468.267z"/>
            </g>
            <g >
              <motion.path variants={rays}
                d="M256,0c-5.333,0-10.667,4.267-10.667,10.667v36.267c0,5.333,4.267,10.667,10.667,10.667
		c6.4,0,10.667-4.267,10.667-10.667V10.667C266.667,4.267,261.333,0,256,0z"/>
              <motion.path variants={rays}
                d="M113.067,65.067c-4.267-4.267-10.667-4.267-14.933,0s-4.267,10.667,0,14.933l25.6,25.6
		c4.267,4.267,10.667,4.267,14.933,0s4.267-10.667,0-14.933L113.067,65.067z"/>
              <motion.path variants={rays}
                d="M80,212.267H43.733c-5.333,0-10.667,4.267-10.667,10.667l0,0c0,5.333,4.267,10.667,10.667,10.667H80
		c5.333,0,10.667-4.267,10.667-10.667l0,0C90.667,217.6,85.333,212.267,80,212.267z"/>
              <motion.path variants={rays}
                d="M123.733,340.267l-25.6,25.6c-4.267,4.267-4.267,10.667,0,14.933s10.667,4.267,14.933,0l25.6-25.6
		c4.267-4.267,4.267-10.667,0-14.933S128,336,123.733,340.267z"/>
              <motion.path variants={rays}
                d="M388.267,340.267C384,336,377.6,336,373.333,340.267c-4.267,4.267-4.267,10.667,0,14.933l25.6,25.6
		c4.267,4.267,10.667,4.267,14.933,0s4.267-10.667,0-14.933L388.267,340.267z"/>
              <motion.path variants={rays}
                d="M468.267,212.267H432c-5.333,0-10.667,4.267-10.667,10.667l0,0c0,5.333,4.267,10.667,10.667,10.667
		h36.267c5.333,0,10.667-4.267,10.667-10.667l0,0C478.933,217.6,474.667,212.267,468.267,212.267z"/>
              <motion.path variants={rays}
                d="M398.933,65.067l-25.6,25.6c-4.267,4.267-4.267,10.667,0,14.933c4.267,4.267,10.667,4.267,14.933,0
		l25.6-25.6c4.267-4.267,4.267-10.667,0-14.933S403.2,60.8,398.933,65.067z"/>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <path id="Pfad_15" data-name="Pfad 15" d="M1173.539,732.769s2-10.615,10.462-24,10.462-15.231,23.385-29.539,16.154-9.692,28.308-27.692,13.846-22.154,20.308-44.308,5.538-44.308,5.538-44.308-.5-20.8-6.958-40.03-6.455-20.009-18.609-37.856-29.054-33.173-29.054-33.173-15.163-12.762-33.933-20.3-19.908-8.026-40.678-10.179-22.769-2.154-41.846,0-17.951,2.26-35.211,10.179-15.5,5.81-31.653,19.81S1004.154,468.154,991.385,486s-13.121,23.13-19.275,42.361-5.492,23.791-5.492,44.868c0,11.3,1.664,18.305,3.138,25.057,1.535,5.5,4.01,13.062,6.865,23.341a60.022,60.022,0,0,0,4.9,11.474s2.55,5.2,11.572,18.928a39.914,39.914,0,0,0,7.453,9.489c.925.93,2.006,2.307,3.138,3.334,5.8,5.264,10,9.807,20.311,17.456,13.385,14.308,12.923,13.846,20.923,26.462a97.536,97.536,0,0,1,11.077,24Z" transform="translate(-857.934 -343)" fill="none" stroke="#fff" strokeWidth="3" />
          </svg>
        </motion.div>
        <Link href="/" activeClass={"selected_home"}>
          <a className={`${styles.homeIcon} themeSVGFilter`} aria-label="home">
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              {" "}
              <path d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z" />
            </svg>
          </a>
        </Link>
      </Morpho_button>
      <Morpho_button>
        <Link href="/about" activeClass={"selected_about"}>
          <a className={styles.aboutIcon} aria-label="about">
            <svg
              height="30px"
              viewBox="-10 0 512 512.00111"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m480.972656 2.738281c-10.230468-5.761719-23.191406-2.136719-28.949218 8.089844l-24.644532 43.757813c14.519532 14.707031 20.90625 35.644531 17.367188 55.773437l44.3125-78.671875c5.761718-10.226562 2.136718-23.1875-8.085938-28.949219zm0 0" />
              <path d="m400.972656 252.871094-58.417968-1.964844 6.332031-45.332031 1.816406 31.847656 19.554687.65625 14.863282-25.125c7.910156-13.375 5.210937-30.074219-5.570313-40.355469l16.871094-11.371094c-4.65625 1.082032-9.460937 1.652344-14.332031 1.652344-13.78125 0-27.527344-4.53125-38.949219-13.386718-7.253906 8.921874-212.972656 261.890624-223.335937 274.636718-8.484376 10.433594-22.507813 14.425782-35.238282 9.992188l-34.484375 35.441406c-9.632812 9.898438-9.414062 25.726562.484375 35.355469 9.894532 9.625 25.722656 9.417969 35.355469-.484375l100.355469-103.144532c1.140625-1.167968 2.164062-2.449218 3.050781-3.816406 52.011719-80.109375 48.648437-74.859375 49.296875-75.957031l14.195312 8.394531 12.027344 75.078125-63.332031 52.566407c-10.625 8.816406-12.089844 24.582031-3.269531 35.207031 8.84375 10.660156 24.613281 12.0625 35.207031 3.269531l74.308594-61.675781c6.804687-5.644531 10.121093-14.464844 8.71875-23.195313l-10.359375-64.652344 23.511718-39.746093c-1.828124-.0625-17.15625-.578125-18.878906-.636719-20.019531-.671875-33.734375-20.445312-27.179687-39.613281l21.355469-53.464844-7.734376 55.367187c-1.742187 12.480469 7.710938 23.753907 20.332032 24.179688l82.015625 2.761719c.242187.007812.484375.011719.726562.011719 11.40625 0 20.84375-9.050782 21.230469-20.535157.390625-11.734375-8.796875-21.566406-20.527344-21.960937zm0 0" />
              <path d="m108.078125 414.589844 221.589844-272.488282-15.25-9.019531c-10.484375-6.203125-23.605469-6.078125-34 .4375l-272.539063 170.84375c-8.890625 5.574219-10.554687 17.847657-3.464844 25.585938l78.238282 85.390625c6.925781 7.558594 18.953125 7.207031 25.425781-.75zm0 0" />
              <path d="m406.816406 57.550781c-23.191406-13.71875-52.863281-5.851562-66.40625 17.042969-13.632812 23.046875-6 52.777344 17.042969 66.40625 23.191406 13.71875 52.863281 5.851562 66.40625-17.042969 13.628906-23.046875 6-52.777343-17.042969-66.40625zm0 0" />
            </svg>
          </a>
        </Link>
      </Morpho_button>
      <Morpho_button>
        <Link href="/skills" activeClass={"selected_skills"}>
          <a className={styles.skillsIcon} aria-label="skills">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 57 56"
              version="1.1"
            >
              <defs />
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  id="001---Thinking"
                  transform="translate(0.000000, -1.000000)"
                  fill="#000000"
                  fillRule="nonzero"
                >
                  <path d="M35.9,8.577 L35.18,5 L32.82,5 L32.1,8.577 C32.0252418,8.94857024 31.7468426,9.24594237 31.381,9.345 C30.5547759,9.56773445 29.7610951,9.89717418 29.02,10.325 C28.6897571,10.5165562 28.2792625,10.5033645 27.962,10.291 L24.933,8.261 L23.266,9.937 L25.29,12.963 C25.5023645,13.2802625 25.5155562,13.6907571 25.324,14.021 C24.8961742,14.7620951 24.5667344,15.5557759 24.344,16.382 C24.2449424,16.7478426 23.9475702,17.0262418 23.576,17.101 L20,17.82 L20,20.18 L23.577,20.899 C23.9485702,20.9737582 24.2459424,21.2521574 24.345,21.618 C24.5677344,22.4442241 24.8971742,23.2379049 25.325,23.979 C25.5165562,24.3092429 25.5033645,24.7197375 25.291,25.037 L23.261,28.066 L24.937,29.733 L27.963,27.709 C28.2802625,27.4966355 28.6907571,27.4834438 29.021,27.675 C29.7620951,28.1028258 30.5557759,28.4322656 31.382,28.655 C31.7478426,28.7540576 32.0262418,29.0514298 32.101,29.423 L32.82,33 L35.18,33 L35.899,29.423 C35.9737582,29.0514298 36.2521574,28.7540576 36.618,28.655 C37.4442241,28.4322656 38.2379049,28.1028258 38.979,27.675 C39.3092429,27.4834438 39.7197375,27.4966355 40.037,27.709 L43.066,29.739 L44.733,28.063 L42.709,25.037 C42.4966355,24.7197375 42.4834438,24.3092429 42.675,23.979 C43.1028258,23.2379049 43.4322656,22.4442241 43.655,21.618 C43.7540576,21.2521574 44.0514298,20.9737582 44.423,20.899 L48,20.18 L48,17.819 L44.423,17.1 C44.0514298,17.0252418 43.7540576,16.7468426 43.655,16.381 C43.4322656,15.5547759 43.1028258,14.7610951 42.675,14.02 C42.4834438,13.6897571 42.4966355,13.2792625 42.709,12.962 L44.739,9.933 L43.063,8.267 L40.037,10.291 C39.7197375,10.5033645 39.3092429,10.5165562 38.979,10.325 C38.2379049,9.89717418 37.4442241,9.56773445 36.618,9.345 C36.2525454,9.24561741 35.9745924,8.94830842 35.9,8.577 Z M41,19 C41,22.8659932 37.8659932,26 34,26 C30.1340068,26 27,22.8659932 27,19 C27,15.1340068 30.1340068,12 34,12 C37.8641657,12.0044086 40.9955914,15.1358343 41,19 Z" />
                  <path
                    d="M44.708,13.574 C44.9840443,14.1166112 45.218064,14.6795956 45.408,15.258 L46.926,15.558 C48.4876438,14.7771754 49.3578288,13.0695165 49.0717608,11.3471392 C48.7856928,9.62476188 47.410209,8.29008387 45.68,8.056 L46.147,8.523 C46.8185306,9.19256726 46.9275347,10.2416795 46.408,11.035 L44.708,13.574 Z"
                    id="Shape"
                  />
                  <path d="M29,19 C29,21.7614237 31.2385763,24 34,24 C36.7614237,24 39,21.7614237 39,19 C39,16.2385763 36.7614237,14 34,14 C31.2399468,14.0033061 29.0033061,16.2399468 29,19 Z M35,19 C35,19.5522847 34.5522847,20 34,20 C33.4477153,20 33,19.5522847 33,19 C33,18.4477153 33.4477153,18 34,18 C34.5522847,18 35,18.4477153 35,19 Z" />
                  <path d="M0.636,34.735 C0.897016404,34.9170713 1.17261917,35.0772821 1.46,35.214 C2.313,35.65 3.481,36.248 3.722,37.467 C3.86518406,38.2227094 3.77195159,39.0041861 3.455,39.705 C3.281,40.076 3.101,40.396 2.944,40.672 C2.896,40.758 2.844,40.854 2.793,40.941 C3.208,41.275 3.774,41.699 4.014,41.875 C4.23229562,42.0357032 4.37599946,42.2781415 4.41219539,42.5467831 C4.44839132,42.8154248 4.37397793,43.0872516 4.206,43.3 C4.05732702,43.493163 3.92803652,43.7004967 3.82,43.919 C3.891,43.961 3.963,44.002 4.035,44.043 C4.91597603,44.4232101 5.5884572,45.1672085 5.878,46.082 C6.02631071,46.7960297 5.99365282,47.5358168 5.783,48.234 C5.736,48.439 5.689,48.644 5.66,48.849 C5.60643127,49.4507664 5.69090962,50.0568216 5.907,50.621 C6.12881207,51.543052 7.03525382,52.128719 7.967,51.952 C10.8811971,51.2511285 13.7526167,50.3830249 16.567,49.352 L16.573,49.352 C17.614,48.998 18.558,48.668 19.301,48.409 C19.994,48.166 20.517,47.984 20.789,47.897 C24.946,46.572 25.789,45.075 25.765,44.052 C25.752146,43.5000397 26.1890455,43.042101 26.741,43.029 C27.0071266,43.0189946 27.2659833,43.1170667 27.4586705,43.3009012 C27.6513577,43.4847357 27.7614871,43.7386973 27.764,44.005 C27.823,46.487 25.681,48.437 21.399,49.805 C21.137,49.889 20.631,50.065 19.961,50.305 L19.061,50.619 C20.7094382,52.4462123 21.9125104,54.6302247 22.576,57 L45.258,56.937 L45.191,56.837 C44.9033067,56.4218577 44.6443682,55.9875092 44.416,55.537 C43.9186739,54.5263955 43.5036619,53.4773282 43.175,52.4 C42.5682684,50.3530291 42.1472324,48.2555471 41.917,46.133 C41.5226514,42.7875258 42.0287491,39.3974307 43.383,36.313 C44.181408,34.6438155 45.1688779,33.0718493 46.326,31.628 C46.906,30.846 47.506,30.038 48.026,29.217 C49.4111468,27.0779657 50.1554304,24.5873047 50.171,22.039 C50.177,21.813 50.171,21.588 50.166,21.363 L49.773,21.1 C49.4965057,21.6402002 48.9888461,22.0249024 48.394,22.145 L45.406,22.745 C45.216064,23.3234044 44.9820443,23.8863888 44.706,24.429 L46.4,26.953 C46.9315268,27.7519165 46.8207373,28.8157476 46.136,29.488 L44.477,31.147 C43.8074327,31.8185306 42.7583205,31.9275347 41.965,31.408 L39.426,29.708 C38.8833888,29.9840443 38.3204044,30.218064 37.742,30.408 L37.142,33.4 C36.9517429,34.3320693 36.1312884,35.0011453 35.18,35 L32.82,35 C31.8665593,35.0004731 31.045351,34.3278524 30.858,33.393 L30.258,30.405 C29.6795956,30.215064 29.1166112,29.9810443 28.574,29.705 L26.047,31.4 C25.247926,31.9287833 24.1864487,31.8186142 23.513,31.137 L21.853,29.477 C21.1814694,28.8074327 21.0724653,27.7583205 21.592,26.965 L23.292,24.426 C23.0159557,23.8833888 22.781936,23.3204044 22.592,22.742 L19.6,22.142 C18.6679307,21.9517429 17.9988547,21.1312884 18,20.18 L18,17.82 C17.9995269,16.8665593 18.6721476,16.045351 19.607,15.858 L22.595,15.258 C22.784936,14.6795956 23.0189557,14.1166112 23.295,13.574 L21.6,11.047 C21.0684732,10.2480835 21.1792627,9.18425235 21.864,8.512 L23.523,6.853 C24.1925673,6.18146939 25.2416795,6.07246529 26.035,6.592 L28.574,8.292 C29.1166112,8.01595569 29.6795956,7.78193603 30.258,7.592 L30.858,4.6 C31.0482571,3.66793067 31.8687116,2.99885469 32.82,3 L35.18,3 C35.3123818,3.00123879 35.4443319,3.01530454 35.574,3.042 L36.394,2.222 C33.7584309,1.27082389 30.9571892,0.864620045 28.16,1.028 C25.0046074,1.24988685 21.8696146,1.70175362 18.78,2.38 C14.744,3.18 11.729,4.615 9.816,6.637 C8.23716519,8.32960767 7.01673014,10.3238693 6.228,12.5 C5.85776635,13.5823467 5.55715248,14.6872697 5.328,15.808 C5.08464372,16.7423575 4.74968773,17.6504232 4.328,18.519 C4.14,18.94 3.951,19.36 3.788,19.788 C3.69044363,20.0122238 3.6355067,20.2526577 3.626,20.497 C3.669,20.797 4.052,21.145 4.458,21.516 C5.28572805,22.0976377 5.82053472,23.0096546 5.924,24.016 C5.90563342,24.491103 5.7732421,24.9548156 5.538,25.368 C4.28652654,28.0034228 2.75289097,30.4953291 0.964,32.8 C0.203,33.727 0.044,34.094 0.04,34.246 C0.22347897,34.4266783 0.422962279,34.5903483 0.636,34.735 Z M7.471,15.25 C7.62815969,14.5552533 7.82515171,13.8701218 8.061,13.198 C8.75614575,11.2732275 9.83379397,9.50912284 11.229,8.012 C12.853,6.3 15.516,5.06 19.145,4.338 C19.6867913,4.23058063 20.2130806,4.58270867 20.3205,5.1245 C20.4279194,5.66629134 20.0757913,6.19258061 19.534,6.3 C16.32,6.939 14.015,7.978 12.682,9.386 C11.4735494,10.6858491 10.5402067,12.2164768 9.938,13.886 C9.72855738,14.4871971 9.5536061,15.0998605 9.414,15.721 C9.33059085,16.0694534 9.06713053,16.3466533 8.7233635,16.4476536 C8.37959646,16.5486538 8.00806424,16.4580176 7.74942662,16.2100591 C7.49078901,15.9621006 7.38457631,15.594718 7.471,15.247 L7.471,15.25 Z M7,19 C7.55228475,19 8,19.4477153 8,20 C8,20.5522847 7.55228475,21 7,21 C6.44771525,21 6,20.5522847 6,20 C6,19.4477153 6.44771525,19 7,19 Z" />
                  <path d="M37.742,7.6 C38.3204044,7.78993603 38.8833888,8.02395569 39.426,8.3 L41.953,6.6 C42.3666116,6.33032695 42.8643993,6.22081366 43.353,6.292 C43.9264672,6.10253554 44.5260585,6.00400954 45.13,6 C47.5759151,5.99176913 49.7807939,7.47244829 50.6986688,9.73962145 C51.6165438,12.0067946 51.0627498,14.6043345 49.3,16.3 C49.743618,16.6805022 49.9992335,17.2355531 50,17.82 L50,18.842 L52.223,20.333 L53.333,19.223 L51.8,16.937 C51.5850329,16.6164292 51.5737461,16.2007641 51.771,15.869 C52.1079017,15.2965611 52.365267,14.6809029 52.536,14.039 C52.6350543,13.6722153 52.9333999,13.3932427 53.306,13.319 L56.006,12.782 L56.006,11.218 L53.311,10.681 C52.9383999,10.6067573 52.6400543,10.3277847 52.541,9.961 C52.370267,9.31909713 52.1129017,8.70343892 51.776,8.131 C51.5772476,7.80019329 51.586588,7.38454458 51.8,7.063 L53.334,4.777 L52.224,3.667 L49.937,5.2 C49.6164292,5.41496713 49.2007641,5.42625392 48.869,5.229 C48.2965611,4.89209833 47.6809029,4.63473301 47.039,4.464 C46.6722153,4.36494573 46.3932427,4.06660008 46.319,3.694 L45.782,1 L44.218,1 L43.681,3.7 C43.6067573,4.07260008 43.3277847,4.37094573 42.961,4.47 C42.3190971,4.64073301 41.7034389,4.89809833 41.131,5.235 C40.7980885,5.43046291 40.3823997,5.41684015 40.063,5.2 L37.777,3.667 L37.077,4.367 C37.1052534,4.44403458 37.1283052,4.52287839 37.146,4.603 L37.742,7.6 Z" />
                </g>
              </g>
            </svg>
          </a>
        </Link>
      </Morpho_button>
      <Morpho_button>
        <Link href="/contact" activeClass={"selected_contact"}>
          <a className={styles.mailIcon} aria-label="contact">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              viewBox="0 0 511.626 511.626"
              style={{ enableBackground: "new 0 0 511.626 511.626" }}
            >
              <g>
                <g>
                  <path
                    d="M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099
			c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277
			c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569
			c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852
			c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116
			c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679
			c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974
			C26.169,159.743,37.307,170.736,49.106,178.729z"
                  />
                  <path
                    d="M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699
			c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287
			c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699
			c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265
			c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265
			V184.437C503.441,193.569,493.927,201.854,483.072,209.275z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </Link>
      </Morpho_button>
      <Morpho_button>
        <Link href="/works" activeClass={"selected_about"}>
          <a className={styles.aboutIcon} aria-label="works">
            <svg viewBox="0 -31 512 512" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg">
              <path d="m211 240h90v30h-90zm0 0" />
              <path d="m415.378906 270h-84.378906v15c0 8.289062-6.710938 15-15 15h-120c-8.289062 0-15-6.710938-15-15v-15h-84.378906c-19.394532 0-36.546875-12.363281-42.6875-30.761719l-53.933594-161.828125v327.589844c0 24.8125 20.1875 45 45 45h422c24.8125 0 45-20.1875 45-45v-327.578125l-53.9375 161.816406c-6.136719 18.398438-23.289062 30.761719-42.683594 30.761719zm0 0" />
              <path d="m316 0h-120c-24.8125 0-45 20.1875-45 45v15h-125.191406l56.574218 169.746094c2.050782 6.136718 7.777344 10.253906 14.238282 10.253906h84.378906v-15c0-8.289062 6.710938-15 15-15h120c8.289062 0 15 6.710938 15 15v15h84.378906c6.460938 0 12.1875-4.117188 14.238282-10.253906l56.578124-169.746094h-125.195312v-15c0-24.8125-20.1875-45-45-45zm-135 60v-15c0-8.277344 6.722656-15 15-15h120c8.277344 0 15 6.722656 15 15v15zm0 0" />
            </svg>
          </a>
        </Link>
      </Morpho_button>
    </div >
  );
};
