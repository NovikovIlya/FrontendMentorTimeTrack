import styles from "./Card.module.css";

const Card = ({ textDay, style, lw, hrs, text, icon, bg }: any) => {
  if (textDay === "Weekly") {
    hrs = hrs * 7;
    lw = lw * 7;
  }
  if (textDay === "Monthly") {
    hrs = hrs * 30;
    lw = lw * 30;
  }
  
  return (
    <div
      className={`${style} ${
        bg === "orange"
          ? styles.orange
          : bg === "blue"
          ? styles.blue
          : bg === "red"
          ? styles.red
          : bg === "green"
          ? styles.green
          : bg === "purple"
          ? styles.purple
          : styles.yellow
      }`}
    >
      <img className={styles.icon} src={icon} />
      <div className={styles.card}>
        <div className={styles.cardHead}>
          <span className={styles.headCard}>{text}</span>
          <div>...</div>
        </div>
        <div className={styles.hrs}>{hrs}hrs</div>
        <div>Last Week - {lw}hrs</div>
      </div>
    </div>
  );
};

export default Card;
