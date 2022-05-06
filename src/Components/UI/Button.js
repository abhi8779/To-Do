import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={styles.button}
    >
      {props.btnTitle}
    </button>
  );
};

export default Button;
