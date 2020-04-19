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

const cardsData = [
  {
    img: i1,
    title: "Learning to Code",
    imgFront: i1Front,
    imgFrontMaxWidth: 477,
    description:
      "Umsetzung eines Flash-basierten Lernprogramm mit modernen Technologien",
    links: [
      {
        name: "Übersicht Chapter I",
        link:
          "https://sicheresarbeitenimlabor.de/fachinformation-responsiv/kapa/uebersicht_a.htm",
      },
      {
        name: "Übersicht Chapter II",
        link:
          "https://sicheresarbeitenimlabor.de/fachinformation-responsiv/kapb/uebersicht_b.htm",
      },
      {
        name: "Übersicht Chapter III",
        link:
          "https://sicheresarbeitenimlabor.de/fachinformation-responsiv/kapc/uebersicht_c.htm",
      },
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
      { name: "JS", link: "https://en.wikipedia.org/wiki/JavaScript" },
      { name: "HTML", link: "https://en.wikipedia.org/wiki/HTML" },
      {
        name: "CSS",
        link: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
      },
      { name: "SASS", link: "https://sass-lang.com/" },
      { name: "jQuery", link: "https://jquery.com/" },
      { name: "jQuery UI", link: "https://jqueryui.com/" },
      {
        name: "Local Storage",
        link: "https://en.wikipedia.org/wiki/Web_storage",
      },
    ],
    timestamp: {
      sum: [6, "Monate"],
      from: [3, 18],
      till: [6, 18],
    },
  },
  {
    img: i2,
    title: "Sicheres Befahren von Behältern",
    imgFront: i2Front,
    imgFrontMaxWidth: 477,

    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    timestamp: {
      sum: [6, "Monate"],
      from: [6, 19],
      till: [9, 19],
    },
  },
  {
    img: i3,
    title: "Fallbeispiel 1,2,3",
    imgFront: i3Front,
    imgFrontMaxWidth: 477,

    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    timestamp: {
      sum: [6, "Monate"],
      from: [9, 18],
      till: [12, 18],
    },
  },
  {
    img: i4,
    title: "Coins Tracker",
    imgFront: i4Front,
    imgFrontMaxWidth: 477,
    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    timestamp: {
      sum: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },
  {
    img: i5,
    title: "applepie",
    imgFront: i5Front,
    imgFrontMaxWidth: 477,

    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    timestamp: {
      sum: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },
  {
    img: i6,
    title: "Virtuelles Labor",
    imgFront: i6Front,
    imgFrontMaxWidth: 477,

    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    timestamp: {
      sum: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },

  {
    img: i7,
    title: "Sicheres Arbeiten im Labor",
    imgFront: i7Front,
    imgFrontMaxWidth: 477,
    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    timestamp: {
      sum: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },
  {
    img: i8,
    title: "Want Eat",
    imgFront: i8Front,
    imgFrontMaxWidth: 315,
    imgBackWidth: 315,
    description: "",
    links: [],
    duties: [],
    tech_stack: [],
    timestamp: {
      sum: [6, "Monate"],
      from: [3, 18],
      till: [9, 18],
    },
  },
];

export default cardsData;
