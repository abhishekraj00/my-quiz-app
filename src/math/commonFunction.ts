import { questionData } from "./../api/data";

//to view question on click question no
export const viewQuestion = (id: number) => {
  return questionData[id - 1];
};

//to view next question
export const nextQuestion = (id: number) => {
  if (id === questionData.length) {
    return questionData[id - 1];
  }
  return questionData[id];
};

//to view prev question
export const prevQuestion = (id: number) => {
  if (id <= 1) {
    return questionData[id - 1];
  }
  return questionData[id - 2];
};

//calculate Score
export const scoreCalculate = (): number => {
  return questionData.filter((item) => item.correct === item.answer).length;
};
