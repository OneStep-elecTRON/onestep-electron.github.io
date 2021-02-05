import React, { useContext, useState } from "react";
import clsx from "clsx";
import update from "immutability-helper";

import axios from "../utils/api";
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
  const [userData, setUserData] = useContext(GlobalContext);

  const handleOnClick = (index: number) => {
    if (selectedIndex === -1) {
      // Means, if user havent attempted quiz yet
      setSelectedIndex(index);
      if (userData) {
        // Send the response to server
        axios
          .patch("/quiz", {
            track: track,
            isCorrect: correctIndex === selectedIndex,
          })
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });

        const increment = correctIndex === selectedIndex ? 1 : 0;
        // Local updates!
        if (track === "basic") {
          const newUserData = update(userData, {
            track: {
              basic: {
                quizScore: { $set: userData.track.basic.quizScore + increment },
                totalQuizAnswered: {
                  $set: userData.track.basic.totalQuizAnswered + 1,
                },
              },
            },
          });
          setUserData(newUserData);
        } else if (track === "intermediate") {
          const newUserData = update(userData, {
            track: {
              intermediate: {
                quizScore: {
                  $set: userData.track.intermediate.quizScore + increment,
                },
                totalQuizAnswered: {
                  $set: userData.track.intermediate.totalQuizAnswered + 1,
                },
              },
            },
          });
          setUserData(newUserData);
        } else if (track === "advanced") {
          const newUserData = update(userData, {
            track: {
              advanced: {
                quizScore: {
                  $set: userData.track.advanced.quizScore + increment,
                },
                totalQuizAnswered: {
                  $set: userData.track.advanced.totalQuizAnswered + 1,
                },
              },
            },
          });
          setUserData(newUserData);
        }
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
