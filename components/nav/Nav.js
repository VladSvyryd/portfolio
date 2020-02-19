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
        <Link href="/about" activeClass={styles.selected_home}>
          <a>About</a>
        </Link>
      </Morpho_button>
      <Morpho_button>
        <Link href="/skills" activeClass={styles.selected_home}>
          <a>Skills</a>
        </Link>
      </Morpho_button>
    </div>
  );
};
