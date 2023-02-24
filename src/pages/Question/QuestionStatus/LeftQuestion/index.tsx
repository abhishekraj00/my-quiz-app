import { useContext } from "react";
import { viewQuestion } from "../../../../math/commonFunction";
import { userContext } from "../../../home";

interface propData {
  id: number;
  answer: string;
}
export const LeftQuestion = ({ id, answer }: propData) => {
  const { setCurrentQuestion } = useContext(userContext);
  return (
    <div
      className="card small_questionBox_status"
      style={{ backgroundColor: answer ? "red" : "grey" }}
      onClick={() => setCurrentQuestion(viewQuestion(id))}
    >
      {id}
    </div>
  );
};
