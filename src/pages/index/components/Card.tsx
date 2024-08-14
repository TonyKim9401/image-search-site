import styles from "./Card.module.scss";

function Card() {
  const openDialog = () => {
    console.log(`function call`);
  };

  return (
    <div className={styles.card} onClick={openDialog}>
      <img src="" alt="" className={styles.card__image}></img>
    </div>
  );
}

export default Card;
