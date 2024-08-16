import styles from "./Card.module.scss";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__imageBox}>
        <img src="" alt="" className={styles.card__imageBox__image} />
      </div>
      <div className={styles.card__infoBox}>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>author</span>
          <span className={styles.value}>value</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>Image size</span>
          <span className={styles.value}>value</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>Upload date</span>
          <span className={styles.value}>value</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>Last update date</span>
          <span className={styles.value}>value</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>Download Count</span>
          <span className={styles.value}>value</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
