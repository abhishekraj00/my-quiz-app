import { QuestionStatus } from "./QuestionStatus";
import "./question.css";
import { useContext } from "react";
import { userContext } from "../home";
import ShowQuestion from "./ShowQuestion";
import BottomButtom from "./BottomButton";

const Question = () => {
  const { currentQuestion } = useContext(userContext);
  return (
    <>
      <div className="card left_part">
        <h4 className="card p-2 m-2">Question Status</h4>
        <QuestionStatus />
      </div>

      <div className="card right_part">
        <ShowQuestion currentQuestion={currentQuestion} />
      </div>
      <BottomButtom />
    </>
  );
};

export default Question;
