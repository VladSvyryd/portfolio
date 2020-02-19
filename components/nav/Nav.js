import styles from "./nav.module.css";
import Link from "../link/link";
import Morpho_button from "../morpho_button/morpho_button";

export const Nav = () => {
  return (
    <div className={styles.navigation}>
      <Morpho_button>
        <Link href="/" activeClass={styles.selected_home}>
          <a>Home</a>
        </Link>
      </Morpho_button>
      <Morpho_button>
        <a>About</a>
      </Morpho_button>
      <Morpho_button>
        <a>Skills</a>
      </Morpho_button>
    </div>
  );
};
