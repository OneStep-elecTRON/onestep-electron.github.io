import React, { useContext, useState } from "react";
import clsx from "clsx";
import styles from "../css/quiz.module.css";

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

  const handleOnClick = (index: number) => {
    if (selectedIndex === -1) {
      // Means, if user havent attempted quiz yet
      setSelectedIndex(index);
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
