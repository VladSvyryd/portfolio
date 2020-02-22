import styles from "./m.module.css";
function Morpho_button(props) {
  const isDown = ({ currentTarget }) => {
    currentTarget.style =
      "box-shadow: 3px 3px 3px rgba(255, 255, 255, 0.05), -2px -2px 3px rgba(0, 0, 0, 0.2)";
  };
  const isUp = ({ currentTarget }) => {
    currentTarget.style =
      " box-shadow: -2px -2px 3px rgba(255, 255, 255, 0.05), 3px 3px 3px rgba(0, 0, 0, 0.2)";
  };
  return (
    <span
      style={props.style}
      className={styles.button}
      onMouseDown={e => isDown(e)}
      onMouseUp={e => isUp(e)}
      onMouseLeave={e => isUp(e)}
    >
      {props.children}
    </span>
  );
}

export default Morpho_button;
