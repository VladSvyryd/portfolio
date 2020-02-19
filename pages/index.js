import { Nav } from "../components/nav/Nav";
import Parallax from "../components/parralax/parallax";
function HomePage({ pages }) {
  return (
    <>
      <div className="twoCol">
        <div>
          <Nav />
        </div>
        <div>
          <Parallax />
        </div>
      </div>
    </>
  );
}

export default HomePage;
