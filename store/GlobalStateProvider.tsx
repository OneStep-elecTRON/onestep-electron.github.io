import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface UserData {
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

// As we have only one state.
// Later, we can implement useReducer to manage multiple states.

// Initial State
const userData: UserData = null;

// Global Context
export const GlobalContext = createContext<
  [UserData, Dispatch<SetStateAction<UserData>>]
>(null);

// Global State Provider
export const GlobalStateProvider: React.FC = ({ children }) => {
  const value = useState(userData);
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
