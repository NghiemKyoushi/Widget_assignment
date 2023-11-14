import { useFieldArray, useForm } from "react-hook-form";
import { QuestionsType, QuestionsTypeParams } from "../model";
import styles from "./question.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { createResponse } from "../api";

export interface QuestionsProps {
  handleCloseFeedBack: () => void;
  questionsList: QuestionsType[];
  handleDoneSubmit: () => void;
}
export const Questions = (props: QuestionsProps) => {
  const { handleCloseFeedBack, handleDoneSubmit, questionsList } = props;

  const { register, handleSubmit, watch } = useForm<{ [key: string]: string }>({
    defaultValues: {},
  });
  const value = watch();
  const submit = async () => {
    let bodySend: QuestionsTypeParams[] = [];
    questionsList.map((item: QuestionsType, index) => {
      if (watch()[item.id] === "") {
        return;
      } else {
        bodySend.push({ questionId: item.id, response: watch()[item.id] });
      }
    });
    if (bodySend.length < 1) {
      return;
    }
    try {
      createResponse(bodySend);
      handleDoneSubmit();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ padding: 10 }}>
      <form className={styles.formFeedBack} onSubmit={handleSubmit(submit)}>
        <div className={styles.feedBackHeader}>
          <FontAwesomeIcon
            onClick={handleCloseFeedBack}
            className={styles.iconClose}
            icon={faClose}
          />
          <p>Tell us more</p>
        </div>
        <div className={styles.questionContainer}>
          {questionsList &&
            questionsList.map((item: QuestionsType) => {
              let placeHolderText = "";
              if (!item.isRequired) {
                placeHolderText = item.placeHolder + "(optional)";
              } else {
                placeHolderText = item.placeHolder;
              }
              return (
                <div key={item?.id} className={styles.questionDetail}>
                  <p>{item.title}</p>
                  <input
                    {...register(item.id.toString(), {
                      required: item.isRequired,
                    })}
                    placeholder={placeHolderText}
                  />
                </div>
              );
            })}
        </div>
        <button className={styles.buttonSubmit}>SUMBIT</button>
      </form>
    </div>
  );
};
