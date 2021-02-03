import React, { createContext, useContext } from "react";

interface UserData {
  id: string;
  username: string;
  email: string;
  track: {
    basic: {
      progress: number;
      quizScore: number;
      totalQuizAnswered: number;
    };
    intermediate: {
      progress: number;
      quizScore: number;
      totalQuizAnswered: number;
    };
    advanced: {
      progress: number;
      quizScore: number;
      totalQuizAnswered: number;
    };
  };
}

interface GlobalState {
  userData: UserData;
  count: number;
}

export const globalState: GlobalState = {
  userData: null,
  count: 5,
};

export const GlobalContext = createContext<GlobalState>(null);

export const GlobalStateProvider: React.FC = ({ children }) => {
  const value = useContext(GlobalContext);
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
