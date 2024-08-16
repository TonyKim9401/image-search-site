import { useNavigate } from "react-router-dom";
import styles from "./CommonHeader.module.scss";

function CommonHeader() {
  // move to bookmark page
  const navigate = useNavigate();
  const moveToPage = () => {
    navigate("/bookmark");
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <img
          src="src/assets/images/image-logo.png"
          alt=""
          className={styles.header__logoBox__logo}
        />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>
          Photo submit
        </button>
        <button
          className={styles.header__profileBox__button}
          onClick={moveToPage}
        >
          Book mark
        </button>
        <span className={styles.header__logoBox__title}>
          ktony9412 | k.tony9412@gmail.com
        </span>
      </div>
    </header>
  );
}

export default CommonHeader;
