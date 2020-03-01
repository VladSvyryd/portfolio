import "../global_styles.css";
import { Nav } from "../components/nav/Nav";
import { AnimatePresence } from "framer-motion";
import Meta from "../components/meta/meta";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  return (
    <div className="flexFrame">
      <Nav />
      <Meta />

      <AnimatePresence exitBeforeEnter={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}
