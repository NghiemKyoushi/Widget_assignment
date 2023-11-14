import { useState, useEffect } from "react";
import styles from "./widget.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faClose } from "@fortawesome/free-solid-svg-icons";
import { getAllQuestion, getRate, sendRate } from "../api";
import { Questions } from "./Questions";
import { Rating } from "./Rating";
import clsx from "clsx";
function Widget() {
  const [visible, setVisible] = useState(false);
  const [isVote, setIsvote] = useState(false);
  const [isFormFeedBack, setIsFormFeedBack] = useState(false);
  const [questionsList, setQuestionList] = useState([]);
  const [isSatisfied, setIsSatisfied] = useState(false);

  const handleCloseRate = () => {
    setVisible(false);
  };
  const handleCloseFeedBack = () => {
    setIsFormFeedBack(false);
  };
  const handleDoneSubmit = () => {
    setIsSatisfied(true);
    setTimeout(() => {
      setIsFormFeedBack(false);
      setIsSatisfied(false);
    }, 2000);
  };
  const handleVote = (value: string) => {
    setIsvote(true);
    try {
      sendRate({ numberRate: value });
      setTimeout(() => {
        setVisible(false);
        setIsFormFeedBack(true);
        setIsvote(false);
      }, 600);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllQuestion()
      .then((res) => {
        if (res.data) {
          setQuestionList(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleOpenForm = () => {
    setVisible(true);
  };
  return (
    <>
      <div>
        {!visible && !isFormFeedBack ? (
          <div className={styles.main}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faFaceSmile}
              style={{ color: "yellow", width: 70, height: 70 }}
            />
            <span
              onClick={() => handleOpenForm()}
              style={{ color: "#fff", whiteSpace: "nowrap", width: 205 }}
            >
              Help us improve
            </span>
          </div>
        ) : visible ? (
          <div
            className={styles.votePopup}
            style={{ bottom: visible && "30px", left: visible && "30px" }}
          >
            {!isVote ? (
              <Rating
                handleCloseRate={handleCloseRate}
                handleVote={handleVote}
              />
            ) : (
              <div className={styles.textCheckRateContainer}>
                <FontAwesomeIcon
                  style={{ width: 60, height: 60 }}
                  className={styles.iconFeedBack}
                  icon={faFaceSmile}
                />
                <p className={styles.textCheckRate}>Thank you!Tell us more</p>
              </div>
            )}
          </div>
        ) : isFormFeedBack ? (
          <>
            {!isSatisfied ? (
              <>
                {questionsList && (
                  <Questions
                    handleDoneSubmit={handleDoneSubmit}
                    handleCloseFeedBack={handleCloseFeedBack}
                    questionsList={questionsList}
                  />
                )}
              </>
            ) : (
              <div
                className={styles.votePopup}
                style={{
                  bottom: isSatisfied && "30px",
                  left: isSatisfied && "30px",
                  gap: 40,
                }}
              >
                <p className={styles.textCheckRate}>Thank you</p>
                <p className={styles.textSatisfied}>
                  Your feedback valuable to us.
                </p>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Widget;
