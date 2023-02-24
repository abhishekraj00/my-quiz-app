import React, { useContext, useEffect } from "react";
import { userContext } from "../../pages/home";

const MultiCorrect = ({ ques_data }: any) => {
  const { questions, setQuestions } = useContext(userContext);

  const { id, question, option, answer2, correct2 } = ques_data;

  const handleAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    questions[id - 1].answer2 = answer2.map((item: string, idx: number) => {
      if (idx === index) {
        return (item = event.target.value);
      }
      return item;
    });
    setQuestions([...questions]);
  };
  useEffect(() => {
    if (getScore(correct2, answer2)) {
      questions[id - 1].answer = "1";
      questions[id - 1].correct2 = ["", "", ""];
      setQuestions([...questions]);
    }
  }, [questions]);

  const getScore = (arr1: string[], arr2: string[]): boolean => {
    return arr1.every((value, index) => value === arr2[index]);
  };
  return (
    <>
      <h1 className="card m-4 p-2 question_box_main">{question}</h1>
      <div className="option_box">
        {option.map((ans: string, index: number) => {
          return (
            <div key={index}>
              <input
                type="radio"
                value={ans}
                checked={answer2[index] === ans}
                onChange={(e) => handleAnswerChange(e, index)}
              />
              <label style={{ marginLeft: "10px" }}>{ans}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MultiCorrect;
