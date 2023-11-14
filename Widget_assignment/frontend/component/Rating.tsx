import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./widget.module.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export interface RatingProps {
  handleCloseRate: (value: boolean) => void;
  handleVote: (item: string) => void;
}
export const Rating = (props: RatingProps) => {
  const {handleCloseRate, handleVote} = props;
  const [ratingList] = useState(["1", "2", "3", "4", "5", "6"]);

  return (
    <>
      <FontAwesomeIcon
        onClick={() => handleCloseRate(false)}
        className={styles.iconClose}
        icon={faClose}
      />
      <p className={styles.rateText}>Rate your experience</p>
      <div className={styles.gridContainer}>
        {ratingList.length > 0 &&
          ratingList.map((item, index) => {
            let boder = false;
            if (index === ratingList.length - 1) {
              boder = true;
            }
            return (
              <div
                key={item}
                className={
                  !boder ? styles.gridItemMiddle : styles.gridItemConner
                }
                onClick={() => handleVote(item)}
              >
                {item}
              </div>
            );
          })}
      </div>
      <div className={styles.textInfoContainer}>
        <p className={styles.textInfo}>NOT SATISFIED</p>
        <p className={styles.textInfo}>VERY SATISFIED</p>
      </div>
    </>
  );
};
