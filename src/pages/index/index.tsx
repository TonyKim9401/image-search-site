import CommonNav from "@/components/common/navigation/CommonNav";
import CommonHeader from "@/components/common/header/CommonHeader";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import styles from "./styles/index.module.scss";

function index() {
  return (
    <div className={styles.page}>
      {/* Common Header UI part */}
      <CommonHeader />
      {/* Common Navigation UI part */}
      <CommonNav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              Sources of visual material from the internet. <br />
              We accept contributions from creators in all regions
            </span>
            {/* Search bar UI part */}
            <CommonSearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}></div>
        {/* Common Footer UI part */}
      </div>
    </div>
  );
}

export default index;
