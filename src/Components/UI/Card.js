import styles from "./Card.module.css";

const Card = (Props) => {
  return (
    <div className={`${styles.card} ${Props.className}`}>{Props.children}</div>
  );
};

export default Card;
