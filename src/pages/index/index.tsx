import { useMemo, useState } from "react";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonHeader from "@/components/common/header/CommonHeader";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";
import DetailDialog from "@/components/common/dialog/DetailDialog";
import upsplashData from "./unsplashConfiguration.json";
import Loading from "./components/Loading";

//CSS
import styles from "./styles/index.module.scss";
import { CardDTO } from "./types/card";
import { imageData } from "@/recoil/selectors/imageSelectors";
import { useRecoilValueLoadable } from "recoil";

function index() {
  const imgSelector = useRecoilValueLoadable(imageData);
  const [imgData, setImgData] = useState<CardDTO>();
  const [open, setOpen] = useState<boolean>(false); // image detail dialog management state

  const CARD_LIST = useMemo(() => {
    if (imgSelector.state === "hasValue") {
      const result = imgSelector.contents.results.map((card: CardDTO) => {
        return (
          <Card
            data={card}
            key={card.id}
            handleDialog={setOpen}
            handleSetData={setImgData}
          />
        );
      });
      return result;
    } else {
      return <Loading />;
    }
  }, [imgSelector]);

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
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
        {/* Common Footer UI part */}
        <CommonFooter />
        {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
      </div>
    </div>
  );
}

export default index;
