import { useContext } from "react";
import { userContext } from "../../pages/home";
import "./multiplechoise.css";

export const MultipleChoiseQuestion = ({ ques_data }: any) => {
  const { questions, setQuestions } = useContext(userContext);

  const { id, question, option, answer } = ques_data;

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    questions[id - 1].answer = event.target.value;
    setQuestions([...questions]);
  };

  return (
    <>
      <h1 className="card m-4 p-2 question_box_main">{question}</h1>
      {/* {option} */}
      <div className="option_box">
        {option.map((ans: string, index: number) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="answer"
                value={ans}
                checked={answer === ans}
                onChange={handleAnswerChange}
              />
              <label style={{ marginLeft: "10px" }}>{ans}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
