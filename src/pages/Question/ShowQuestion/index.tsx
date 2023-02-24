import FillInTheBlanks from "../../../components/FillTheBlanks";
import { MatchTheFollowing } from "../../../components/MatchTheFollowing";
import MultiCorrect from "../../../components/MultiCorrect";
import { MultipleChoiseQuestion } from "../../../components/MultipleChoiseQuestion";

const ShowQuestion = ({ currentQuestion }: any) => {
  if (
    currentQuestion.type === "multiple-choise" ||
    currentQuestion.type === "True-False"
  ) {
    return <MultipleChoiseQuestion ques_data={currentQuestion} />;
  } else if (currentQuestion.type === "match-the-following") {
    return <MatchTheFollowing ques_data={currentQuestion} />;
  } else if (currentQuestion.type === "Fill-in-the-black") {
    return <FillInTheBlanks ques_data={currentQuestion} />;
  } else if (currentQuestion.type === "MultiCorrect") {
    return <MultiCorrect ques_data={currentQuestion} />;
  } else {
    return <h1>Empty</h1>;
  }
};

export default ShowQuestion;
