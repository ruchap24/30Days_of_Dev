import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].answers.map((answer) => (
            <button onClick={() => handleAnswer(answer.isCorrect)} key={answer.text}>
              {answer.text}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Your Score: {score}</h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
