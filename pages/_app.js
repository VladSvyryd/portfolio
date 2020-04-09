import "../global_styles.css";
import { Nav } from "../components/nav/Nav";
import { AnimatePresence } from "framer-motion";
import Meta from "../components/meta/meta";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
// This default export is required in a new `pages/_app.js` file.
const tagManagerArgs = {
  gtmId: "GTM-PST84HM",
};
export default function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  });
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
