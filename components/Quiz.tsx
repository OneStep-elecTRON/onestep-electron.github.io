import React, { useContext, useEffect, useState } from "react";
import axios from "../utils/api";
import clsx from "clsx";
import { getCookie } from "../utils/cookie";

import styles from "../src/css/quiz.module.css";

// Global Store
import { GlobalContext } from "../store/GlobalStateProvider";

export const Quiz: React.FC = ({ children, ...props }) => {
  return (
    <div className={styles.quiz} {...props}>
      {children}
    </div>
  );
};

export const Question: React.FC = ({ children, ...props }) => {
  return (
    <div className={styles.question} {...props}>
      {children}
    </div>
  );
};

interface AnswerPanelProps {
  answers: string[];
  correctIndex: number;
  track: "basic" | "intermediate" | "advanced";
}

export const AnswerPanel: React.FC<AnswerPanelProps> = ({
  answers,
  correctIndex,
  track,
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [userData] = useContext(GlobalContext);

  const handleOnClick = (index: number) => {
    if (selectedIndex === -1) {
      // Means, if user havent attempted quiz yet
      setSelectedIndex(index);
      if (userData) {
        // Send the response to server
        axios
          .patch("/quiz", {
            track: "basic",
            isCorrect: true,
          })
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const getColor = (index: number) => {
    const buttonStyles = [styles.button];

    if (selectedIndex !== -1) {
      if (index === correctIndex) {
        buttonStyles.push(styles.correct);
      } else if (index == selectedIndex) {
        buttonStyles.push(styles.wrong);
      }
    }
    return buttonStyles;
  };

  return (
    <div className={styles.grid} {...props}>
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleOnClick(index)}
          className={clsx(getColor(index))}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};
