import CommonNav from "@/components/common/navigation/CommonNav";
import CommonHeader from "@/components/common/header/CommonHeader";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";
import upsplashData from "./unsplashConfiguration.json";

//CSS
import styles from "./styles/index.module.scss";
import axios from "axios";
import { useEffect } from "react";

function index() {
  const getData = async () => {
    // Calling open API
    const API_URL = upsplashData.API_URL;
    const API_KEY = upsplashData.API_KEY;
    console.log(API_KEY);
    const PER_PAGE = 30;

    const searchValue = "Korea";
    const pageValue = 100;

    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
        <div className={styles.page__contents__imageBox}>
          <Card />
          <Card />
          <Card />
        </div>
        {/* Common Footer UI part */}
        <CommonFooter />
      </div>
    </div>
  );
}

export default index;
