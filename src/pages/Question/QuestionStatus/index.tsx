import { useContext } from "react";
import { userContext } from "../../home";
import { LeftQuestion } from "./LeftQuestion";

export const QuestionStatus = () => {
  const { questions } = useContext(userContext);
  return (
    <div className="d-flex">
      {questions.map((item, i) => {
        return (
          <LeftQuestion key={"status" + i} id={item.id} answer={item.answer} />
        );
      })}
    </div>
  );
};
