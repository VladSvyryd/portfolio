import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { shuffle } from "lodash";
import dynamic from "next/dynamic";
const NoSSRComponent = dynamic(
    () => import("../components/object/CanvaS"),
    {
        ssr: false
    }
);
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

const about = ({ theme }) => {


    return (
        <motion.div
            exit={{ opacity: 0, scale: 0 }}
            className={`twoCol  ${theme ? "lightsOn" : null}`}

            initial={anim_init_Desktop}
            animate={anim_finish_Desktop}
        >
            <NoSSRComponent />
        </motion.div>
    );
};

export default about;
