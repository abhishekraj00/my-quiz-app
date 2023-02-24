import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { questionData } from "../../api/data";
import Login from "../../auth/Login";
import Question from "../Question";
import Socre from "../Score";

interface obj {
  id: number;
  question: string;
  correct: string;
  correct2?: string[];
  answer: string;
  answer2?: string[];
  option: string[];
  type: string;
}

type contextData = {
  questions: obj[];
  setQuestions: React.Dispatch<React.SetStateAction<obj[]>>;
  currentQuestion: obj;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<obj>>;
};

export const userContext = createContext({} as contextData);

const Home: React.FC = () => {
  const [questions, setQuestions] = useState<obj[]>(questionData);
  const [currentQuestion, setCurrentQuestion] = useState<obj>(questionData[0]);
  return (
    <userContext.Provider
      value={{ questions, setQuestions, setCurrentQuestion, currentQuestion }}
    >
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/questionpage" element={<Question />} />
            <Route path="/score" element={<Socre />} />
          </Routes>
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
};

export default Home;
