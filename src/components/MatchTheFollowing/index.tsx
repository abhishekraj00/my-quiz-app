import { userContext } from "../../pages/home";
import { useContext, useEffect } from "react";
import "./Match.css";

export const MatchTheFollowing = ({ ques_data }: any) => {
  const { questions, setQuestions } = useContext(userContext);

  const { id, question, option, answer2, correct2 } = ques_data;
  const leftBox: string[] = ["apple", "car", "dog"];

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("data", event.currentTarget.innerText);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, i: string) => {
    const itemId = event.dataTransfer.getData("data");
    let k = questions[id - 1];
    questions[id - 1].answer2 = answer2.map((item: string, idx: string) => {
      if (idx === i) {
        return itemId;
      } else {
        return item;
      }
    });
    questions[id - 1].answer ="0";
    setQuestions([...questions]);
  };

  const reset = () => {
    questions[id - 1].option = ["animal", "fruit", "vehicle"];
    questions[id - 1].answer2 = ["", "", ""];
    console.log(questions[id - 1]);

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
      <h4 className="card p-2 m-2 text-center bg-dark text-light">
        {question}
      </h4>
      {/* question box */}
      <div className="mm_box">
        {/* left box */}
        <div className="card p-2 m-4">
          {leftBox.map((item: string, i) => {
            return (
              <div key={i} className="o_box card p-2 m-2 bg-info">
                {item}
              </div>
            );
          })}
        </div>
        {/* right option box */}
        <div className="card p-2 m-4 pointer">
          {answer2.map((item: string, i: string) => {
            return (
              <div
                key={"opt" + i}
                id={i}
                className="o_box card p-2 m-2 bg-info"
                draggable={true}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, i)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <button className="btn btn-dark o_btn" onClick={reset}>
        Reset All
      </button>
      <div className="down_option_box">
        <p className="card p-2 m-2 bg-dark text-light w-25 text-center">
          Pick Option From Here
        </p>
        <div className="d-flex pointer">
          {option.map((item: string, i: string) => {
            return (
              <div
                key={"opt2" + i}
                className=" o_box card p-2 m-2 bg-info"
                draggable={true}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, i)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
