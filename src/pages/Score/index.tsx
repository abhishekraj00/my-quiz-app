import { useNavigate } from "react-router-dom";
import { scoreCalculate } from "../../math/commonFunction";
import "./score.css";

const Socre = () => {
  const navigate = useNavigate();
  return (
    <div className="score_container">
      <button
        className="btn btn-dark m-2 p-3 w-50"
        onClick={() => navigate("/")}
      >
        🏠Home
      </button>
      <div className="score_box card p-4 m-4">
        Your Score : {scoreCalculate()}
      </div>
    </div>
  );
};

export default Socre;
