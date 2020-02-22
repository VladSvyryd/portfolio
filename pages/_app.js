import "../global_styles.css";
import { Nav } from "../components/nav/Nav";

import { AnimatePresence } from "framer-motion";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  return (
    <div className="flexFrame">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}
