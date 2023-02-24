import React, { useContext } from "react";
import { userContext } from "../../pages/home";

const FillInTheBlanks = ({ ques_data }: any) => {
  const { questions, setQuestions } = useContext(userContext);

  const { id, question, answer, type } = ques_data;

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    questions[id - 1].answer = event.target.value.toLowerCase();
    setQuestions([...questions]);
  };
  return (
    <>
      <span className="p-2 text-center">
        Question Type: <b>{type}</b>
      </span>
      <h1 className="card m-4 p-2 question_box_main">{question}</h1>

      <input
        placeholder="Type Your Answer"
        className="w-50 m-4 p-2"
        value={answer}
        onChange={handleInput}
      />
    </>
  );
};

export default FillInTheBlanks;
