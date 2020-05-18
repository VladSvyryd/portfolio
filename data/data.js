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
    title: "Sicheres Arbeiten im Labor",
    imgFront: i1Front,
    imgFrontMaxWidth: 477,
    description:
      "The program consists of learning materials, video lessons, tests and mini-games. This software has state management system to store results of learning process and games, full size search and work as well on mobile as on desktop devices. Especially the web application has to be supported by all old and modern Browsers, starting from IE 10. Among other conditions it has to be build with the  help of HTML, CSS, JS and work both online and offline.",
    links: [
      {
        name: "Chapter I",
        link:
          "https://sicheresarbeitenimlabor.de/fachinformation-responsiv/kapa/uebersicht_a.htm",
      },
      {
        name: "Chapter II",
        link:
          "https://sicheresarbeitenimlabor.de/fachinformation-responsiv/kapb/uebersicht_b.htm",
      },
      {
        name: "Chapter III",
        link:
          "https://sicheresarbeitenimlabor.de/fachinformation-responsiv/kapc/uebersicht_c.htm",
      },
    ],
    duties: [
      "Collaboration with Designer during implementing of Layout",
      "Customizing the designs with  Photoshop/ Adobe XD to improve UX/UI",
      "Prototyping individual reusable components for responsive design",
      "Implementation of the program architecture (with distant support)",
      "Creation of functional requirements of the project",
      "Working on cross-references between three parts of the program",
      "Create a search-function in the program",
      "Processing state of exercises and global state of interactive elements of application",
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
      sum: [6, "Months"],
      from: [3, 18],
      till: [9, 18],
    },
  },
  {
    img: i2,
    title: "Sicheres Befahren von Behältern",
    imgFront: i2Front,
    imgFrontMaxWidth: 477,
    description: "Renew deign of the Webpage, refactor project. The Page hast to be responsive and supported by most of the Browsers.",
    links: [{
      name: "Webpage",
      link:
        "https://sicheres-befahren.de/hauptmenue/index.htm",
    },],
    duties: [
      "Prototyping UI with Photoshop",
      "Design and implement new TOC element",
      "Planning and developing media queries and css logic for them",
      "Refactor HTML 4 to HTML 5"
    ],
    tech_stack: [{ name: "JS", link: "https://en.wikipedia.org/wiki/JavaScript" },
    { name: "HTML", link: "https://en.wikipedia.org/wiki/HTML" },
    {
      name: "CSS",
      link: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
    },
    { name: "SASS", link: "https://sass-lang.com/" },
    { name: "jQuery", link: "https://jquery.com/" },],
    timestamp: {
      sum: [2, "Months"],
      from: [9, 18],
      till: [11, 18],
    },
  },
  {
    img: i3,
    title: "Fallbeispiel I, II, III",
    imgFront: i3Front,
    imgFrontMaxWidth: 477,
    description: "The goal is to recreate a flash-based web application. There are new functional and not functional requirement. All pages has new responsive Layout. Three parts of program are separate projects. Manage state of the program and save it in local storage, as well as state of interactive elements of the application. Create a lexicon-program that uses old html pages in iFrame.",
    links: [{
      name: "Fallbeispiel I",
      link:
        "https://sicheres-befahren.de/fachinformation/fallbeispiel1/aus_einleitung.htm",
    },
    {
      name: "Fallbeispiel II",
      link:
        "https://sicheres-befahren.de/fachinformation/fallbeispiel2/aus_einleitung.htm",
    },
    {
      name: "Fallbeispiel III",
      link:
        "https://sicheres-befahren.de/fachinformation/fallbeispiel3/aus_einleitung.htm",
    }],
    duties: [
      "Prototyping Layout and implementing it.",
      "Develop all interactive elements.",
      "Implement logic of state of Application.",
      "Create 3 chapters of the program."
    ],
    tech_stack: [{ name: "JS", link: "https://en.wikipedia.org/wiki/JavaScript" },
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
    }],
    timestamp: {
      sum: [3, "Months"],
      from: [1, 19],
      till: [3, 19],
    },
  },
  {
    img: i4,
    title: "Coins Tracker",
    imgFront: i4Front,
    imgFrontMaxWidth: 477,
    description: "Budgeting app to reining your spending and getting your personal finances under control. A project with completely free Tech Stack. There should be own backend with Rest API and nice frontend with Material UI design lines.",
    links: [{
      name: "GitHub Link",
      link:
        "https://github.com/VladSvyryd/coinsTracker",
    }],
    duties: [
      "Developing server with Python with Flask",
      "Implementing all needed services: GET, POST, DELETE, PUT",
      "Prototyping and implementing multiple color-themes",
      "Design Layout",
      "Connect Services on frontend",
      "Create 3 types of statistics charts"
    ],
    tech_stack: [{ name: "JS", link: "https://en.wikipedia.org/wiki/JavaScript" },
    { name: "HTML", link: "https://en.wikipedia.org/wiki/HTML" },
    {
      name: "CSS",
      link: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
    },
    { name: "Angular 7", link: "https://angular.io/" },
    { name: "Python", link: "https://www.python.org/" },
    {
      name: "Flask",
      link: "https://flask.palletsprojects.com/en/1.1.x/",
    },
    {
      name: "SQLite",
      link: "https://www.sqlite.org/index.html",
    },
    {
      name: "jwt",
      link: "https://jwt.io/",
    },
    {
      name: "Chart.js",
      link: "https://www.chartjs.org/",
    }, {
      name: "Angular Material",
      link: "https://material.angular.io/",
    }, {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
    }],
    timestamp: {
      sum: [6, "Months"],
      from: [2, 19],
      till: [8, 19],
    },
  },
  {
    img: i5,
    title: "Applepie",
    imgFront: i5Front,
    imgFrontMaxWidth: 477,
    description: "Landing Page with Angular and Progressive Web Technologies. Fast and user friendly webpage.",
    links: [{
      name: "applepie",
      link:
        "https://applepie.berlin/",
    }],
    duties: [
      "Prototyping individual reusable components with Angular",
      "Implementing the necessary logic and, if necessary, adapting the UI in cooperation with",
      "Discussing and implementing necessary improvements and further ideas together with the customer"
      , "Bringing in further suggestions and ideas through continuous research in the area of UI, UX and Material Design."
    ],
    tech_stack: [{ name: "JS", link: "https://en.wikipedia.org/wiki/JavaScript" },
    { name: "HTML", link: "https://en.wikipedia.org/wiki/HTML" },
    {
      name: "CSS",
      link: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
    },
    { name: "Angular 7", link: "https://angular.io/" },
    {
      name: "Angular Material",
      link: "https://material.angular.io/",
    }, {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
    }],
    timestamp: {
      sum: [3, "Months"],
      from: [3, 19],
      till: [6, 19],
    },
  },
  {
    img: i6,
    title: "Virtuelles Labor",
    imgFront: i6Front,
    imgFrontMaxWidth: 477,
    description: "Create training program as Progressive Web Application. The program contains system of levels and interactive rooms in from of different kinds of exercises. State management of the App. Tree structure of levels in the program. Create different types of learning tests.",
    links: [{
      name: "Virtuelles Labor",
      link:
        "https://sicheresarbeitenimlabor.de/virtuelles_labor/build/index.html#/",
    }],
    duties: [
      "Create user friendly layout",
      "Develop application architecture",
      "Implement logic of state management using Context API of React.js",
      "Implement tree type of routes of the program",
      "Programming all interactive React components: Drag´n`Drop, Modal Windows, Print Module, Dynamic Navigation Panel"
    ],
    tech_stack: [{ name: "JS", link: "https://en.wikipedia.org/wiki/JavaScript" },
    { name: "HTML", link: "https://en.wikipedia.org/wiki/HTML" },
    {
      name: "CSS",
      link: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
    },
    { name: "React.js", link: "https://reactjs.org/" },
    { name: "Semantic-UI", link: "https://semantic-ui.com/" },
    {
      name: "Video-React",
      link: "https://video-react.js.org/",
    },],
    timestamp: {
      sum: [6, "Months"],
      from: [3, 19],
      till: [9, 19],
    },
  },

  {
    img: i7,
    title: "Electron Project",
    imgFront: i7Front,
    imgFrontMaxWidth: 477,
    description: "There are multiple web pages (web applications) that has to be connected with each other like in a sand box. This Application hast to work online and have own pdf viewer, print module and tabs system. There has to be a Local Storage to manage a state of all programs and save it. It is also has to work in intranet and on local machines.",
    links: [],
    duties: [
      "Research on existing software",
      "Prototyping Electron applications",
      "Develop Electron's Shell",
      "Working on developing events to connect Electron and Applications",
      "Embed PDF Viewer into Electron",
      "Add tabs system as in chrome browser",
      "Test the logic of Electron App"
    ],
    tech_stack: [{ name: "JS", link: "https://en.wikipedia.org/wiki/JavaScript" },
    { name: "HTML", link: "https://en.wikipedia.org/wiki/HTML" },
    {
      name: "CSS",
      link: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
    }, {
      name: "Electron.js",
      link: "https://www.electronjs.org/",
    }],
    timestamp: {
      sum: [2, "Months"],
      from: [1, 20],
      till: [2, 20],
    },
  },
  {
    img: i8,
    title: "iOS App 'WantEat'",
    imgFront: i8Front,
    imgFrontMaxWidth: 477,
    description: "Development of a mobile application to suggest recipes under consideration of available supplies of food.",
    links: [{
      name: "GitHub",
      link: "https://github.com/VladSvyryd/wantEatSwift",
    }],
    duties: [
      "Research on Native Platform vs Web Platform",
      "Functional and Nonfunctional requirements",
      "Use Case Diagrams",
      "UI/UX Prototyping",
      "Research on REST API for recipes",
      "Implement main logic and interface elements",
      "Develop application state",
      "Core Data integration"
    ],
    tech_stack: [
      {
        name: "Swift",
        link: "https://developer.apple.com/swift/",
      },
      {
        name: "SwiftUI",
        link: "https://developer.apple.com/xcode/swiftui/",
      }
    ],
    timestamp: {
      sum: [5, "Months"],
      from: [10, 19],
      till: [2, 20],
    },
  },
];

export default cardsData;
