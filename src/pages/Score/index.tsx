import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useNavigate } from "react-router-dom";
import { scoreCalculate } from "../../math/commonFunction";
import "./score.css";

const Socre = () => {
  const navigate = useNavigate();

  const correct_value = scoreCalculate();
  const wrong_value = 5 - scoreCalculate();

  const c_percentage = (correct_value / 5) * 100;
  const w_percentage = (wrong_value / 5) * 100;

  const chartRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: "pie",
        data: {
          labels: [`correct ${c_percentage}%`, `wrong ${w_percentage}%`],
          datasets: [
            {
              data: [correct_value, wrong_value],
              backgroundColor: ["green", "red"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
      return () => chart.destroy();
    }
  }, []);
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
      <div>
        <div
          className="card p-4 m-4"
          style={{ width: "400px", height: "400px" }}
        >
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default Socre;
