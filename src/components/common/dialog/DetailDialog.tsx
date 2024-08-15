import { CardDTO, Tag } from "@/pages/index/types/card";
import styles from "./DetailDialog.module.scss";

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
}

function DetailDialog({ data, handleDialog }: Props) {
  const closeDialog = () => {
    handleDialog(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>
        <div className={styles.container__dialog__header}>
          <div className={styles.close}>
            <button className={styles.close__button}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 28 + "px" }}
                onClick={closeDialog}
              >
                close
              </span>
            </button>
            <img
              src={data.user.profile_image.small}
              alt="photographer profile photo"
              className={styles.close__authorImage}
            ></img>
            <span className={styles.close__authorName}>{data.user.name}</span>
          </div>
          <div className={styles.bookmark}>
            <button className={styles.bookmark__button}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 16 + "px" }}
              >
                favorite
              </span>
              Book mark
            </button>
            <button className={styles.bookmark__button}>Download</button>
          </div>
        </div>
        <div className={styles.container__dialog__body}>
          <img
            src={data.urls.small}
            alt={data.alt_description}
            className={styles.image}
          />
        </div>
        <div className={styles.container__dialog__footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>Image size</span>
              <span className={styles.infoBox__item__value}>
                {data.width} X {data.height}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>Upload date</span>
              <span className={styles.infoBox__item__value}>
                {data.created_at.split("T")[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>
                Last update date
              </span>
              <span className={styles.infoBox__item__value}>
                {data.updated_at.split("T")[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>
                Download Count
              </span>
              <span className={styles.infoBox__item__value}>{data.likes}</span>
            </div>
          </div>
          <div className={styles.tagBox}>
            {data.tags.map((tag: Tag) => {
              return (
                <div className={styles.tagBox__tag} key={tag.title}>
                  {tag.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDialog;
