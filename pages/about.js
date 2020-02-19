import { Nav } from "../components/nav/Nav";
import fetch from "isomorphic-unfetch";
import { useState } from "react";
const about = ({ page }) => {
  const [pageObject, set] = useState(page);
  console.log(pageObject);
  return (
    <>
      <Nav />
      <div>This is About</div>
      <div>This is {pageObject.path}</div>
      <div>{pageObject.paragraph}</div>
      <div>
        {" "}
        {pageObject.picture.map(pic => (
          <div key={pic.id}>
            <img
              src={`http://localhost:1337${pic.url}`}
              style={{ width: "200px" }}
            />
            <p>{pageObject.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
about.getInitialProps = async () => {
  const res = await fetch("http://localhost:1337/pages?path=about");
  const json = await res.json();
  return { page: json[0] };
};
export default about;
