import styles from "./CommonFooter.module.scss";

function CommonFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagenation}>
        <button className={styles.pagenation__button}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="" />
        </button>
        {/* this part will be changed soon */}
        <span>1</span>
        <button className={styles.pagenation__button}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="" />
        </button>
      </div>
    </footer>
  );
}

export default CommonFooter;
