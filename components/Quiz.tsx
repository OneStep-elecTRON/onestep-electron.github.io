import React, { useState } from "react";

export const Quiz: React.FC = ({ children, ...props }) => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        border: "1px solid #f0f0f0",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const Question: React.FC = ({ children, ...props }) => {
  return (
    <div
      style={{
        fontSize: 18,
        display: "flex",
        justifyContent: "center",
        fontWeight: "bold",
        paddingTop: 5,
        paddingBottom: 5,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

interface AnswerPanelProps {
  answers: string[];
  correctIndex: number;
}

export const AnswerPanel: React.FC<AnswerPanelProps> = ({
  answers,
  correctIndex,
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleOnClick = (index: number) => {
    if (selectedIndex === -1) {
      setSelectedIndex(index);
    }
  };

  const getColor = (index: number) => {
    if (selectedIndex !== -1) {
      if (index === correctIndex) {
        return "#f2fff2"; // green
      } else if (index == selectedIndex) {
        return "#fff2f2"; // red
      }
    }
    return "#ffffff"; // white
  };

  return (
    <div
      style={{
        display: "grid",
        gap: 10,
        gridTemplateColumns: "1fr 1fr",
      }}
      {...props}
    >
      {answers.map((answer, index) => (
        <button
          onClick={() => handleOnClick(index)}
          style={{
            height: 45,
            border: "1px solid #e7e7e7",
            borderRadius: 3,
            background: getColor(index),
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};
