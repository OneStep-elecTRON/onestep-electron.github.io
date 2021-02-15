import React, { useContext, useState } from "react";
import clsx from "clsx";
import update from "immutability-helper";

import axios from "../utils/api";
import { eraseCookie, getCookie } from "../utils/cookie";
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
          .patch(
            "/quiz",
            {
              track: track,
              isCorrect: correctIndex === index,
            },
            {
              headers: {
                authorization: `Bearer ${getCookie("token")}`,
              },
            }
          )
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });

        axios
          .patch(
            "/progress",
            {
              track: track,
              count: userData.track[track].progress,
            },
            {
              headers: {
                authorization: `Bearer ${getCookie("token")}`,
              },
            }
          )
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });

        const increment = correctIndex === index ? 1 : 0;

        // Local Updates
        const newUserData = update(userData, {
          track: {
            [track]: {
              quizScore: { $set: userData.track[track].quizScore + increment },
              totalQuizAnswered: {
                $set: userData.track[track].totalQuizAnswered + 1,
              },
              progress: { $set: userData.track[track].progress + 20 },
            },
          },
        });
        setUserData(newUserData);
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
