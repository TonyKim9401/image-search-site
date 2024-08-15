import { useState, useEffect } from "react";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonHeader from "@/components/common/header/CommonHeader";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";
import upsplashData from "./unsplashConfiguration.json";

//CSS
import styles from "./styles/index.module.scss";
import axios from "axios";
import { CardDTO } from "./types/card";

function index() {
  const [imgUrls, setImgUrls] = useState([]);
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
      if (res.status === 200) {
        setImgUrls(res.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cardList = imgUrls.map((card: CardDTO) => {
    return <Card data={card} key={card.id} />;
  });

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
        <div className={styles.page__contents__imageBox}>{cardList}</div>
        {/* Common Footer UI part */}
        <CommonFooter />
      </div>
    </div>
  );
}

export default index;
