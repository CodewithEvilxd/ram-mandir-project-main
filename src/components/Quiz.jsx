// src/Quiz.js
import React, { useState } from "react";
import Modal from "react-modal";
import { quizData } from "../constants/quiz";
import { Link } from "react-router-dom";

Modal.setAppElement("#root"); // Set the root element for accessibility

const Quiz = () => {
  const [selectedOptions, setSelectedOptions] = useState(
    Array(quizData.length).fill(null)
  );
  const [earnedReward, setEarnedReward] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < quizData.length; i++) {
      const correctOptionIndex = quizData[i].options.findIndex(
        (option) => option === quizData[i].answer
      );
      if (selectedOptions[i] === correctOptionIndex) {
        score += 1;
      }
    }
    return score;
  };

  const isEligibleForReward = calculateScore() > 7;

  const handleRewardButtonClick = () => {
    if (isEligibleForReward) {
      setEarnedReward(true);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="w-full">
      <h2 className="mb-4 font-bold text-2xl sm:text-5xl m-2 p-2 text-orange-500 text-center">
        Check your Knowledge
      </h2>
      <div className="w-full mx-auto p-8 bg-slate-50">
        {quizData.map((question, questionIndex) => (
          <div key={questionIndex} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {question.question}
            </h2>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={`p-2 cursor-pointer transition duration-300 border border-orange-200 border-spacing-1 ${
                    optionIndex === selectedOptions[questionIndex]
                      ? question.answer === option
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-white hover:bg-yellow-100"
                  }`}
                  onClick={() => handleOptionSelect(questionIndex, optionIndex)}
                >
                  {option}
                </li>
              ))}
            </ul>
            {selectedOptions[questionIndex] !== null && (
              <div className="mt-4">
                {question.answer ===
                question.options[selectedOptions[questionIndex]] ? (
                  <p className="text-green-500 font-semibold">
                    Correct! {question.options[selectedOptions[questionIndex]]}{" "}
                    is the right answer.
                  </p>
                ) : (
                  <div>
                    <p className="text-red-500 font-semibold">
                      Incorrect! {question.options[selectedOptions[questionIndex]]}{" "}
                      is not the correct answer.
                    </p>
                    <p className="text-gray-700">
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        <div className="mt-4">
          {selectedOptions.every((option) => option !== null) && (
            <p className="text-xl font-semibold mb-2">
              Your Score: {calculateScore()} out of {quizData.length}
            </p>
          )}
          {isEligibleForReward && !earnedReward && (
            <button
              onClick={handleRewardButtonClick}
              className="bg-orange-500 text-white p-4 rounded-md text-sm"
            >
              Reward
            </button>
          )}
          <Modal
          className="rounded-sm w-80 h-3/4 bg-white mx-auto p-2 shadow-lg"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Reward Modal"
          >
            <div className="px-2">
            <img
                src="https://i.pinimg.com/originals/8b/f8/06/8bf806f5f991eb2745a0bffad5d18d82.jpg"
                alt="Ram Bhakt"
                className="rounded-md w-72 h-64"
              />
              <div className="mx-5">
              <p className="mt-2 text-orange-500 text-sm font-semibold">Congratulations! You've earned a Badge!</p>
              <p className="text-orange-500 text-sm mb-1 font-semibold">Let's spread your culture with these #</p>
              </div>
              <button className="bg-black rounded-md p-1 shadow-sm text-white me-1 ml-4 cursor-auto">jaishreeram</button>
              <button className="bg-black rounded-md p-1 shadow-sm text-white me-1 cursor-auto">rambhakt</button>
              <button className="bg-black rounded-md p-1 shadow-sm text-white cursor-auto">ramreward</button>
              
              <div className="text-sm">
              <p className="mt-1 mx-16 font-bold">Play Quiz & Win Reward</p>
              <p className="mx-8 font-semibold"><Link to="https://heart-of-hanuman.netlify.app" target="" className="text-orange-400 hover:text-blue-500">https://heart-of-hanuman.netlify.app</Link></p>
              </div>

              <button onClick={closeModal} className="relative bg-orange-500 mt-1 mx-24 text-white w-16 h-8 p-1 text-center rounded-md text-sm">
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
