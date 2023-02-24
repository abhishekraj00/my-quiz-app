import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { nextQuestion, prevQuestion } from "../../../math/commonFunction";
import { userContext } from "../../home";
import "./bottmoButton.css";

const BottomButtom = () => {
  const { currentQuestion, setCurrentQuestion } = useContext(userContext);
  const navigate = useNavigate();

  return (
    <div className="btn_container">
      {currentQuestion.id > 1 && (
        <button
          className="btn btn-dark m-2 p-2"
          onClick={() => setCurrentQuestion(prevQuestion(currentQuestion.id))}
        >{`Previous`}</button>
      )}
      {currentQuestion.id === 5 ? (
        <button
          className="btn btn-dark m-2 p-2 bg-success"
          onClick={() => navigate("/score")}
        >
          Submit
        </button>
      ) : (
        <button
          className="btn btn-dark m-2 p-2"
          onClick={() => setCurrentQuestion(nextQuestion(currentQuestion.id))}
        >{`Next`}</button>
      )}
    </div>
  );
};

export default BottomButtom;
