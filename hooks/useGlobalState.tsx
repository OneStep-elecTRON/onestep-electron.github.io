import React, { createContext, useState, useContext } from "react";

const state = {
  count: 10,
};

const useMyState = () => useState(state);

const MyContext = createContext<ReturnType<typeof useMyState> | null>(null);

export const useSharedState = () => {
  const value = useContext(MyContext);
  if (value === null) throw new Error("Please add SharedStateProvider");
  return value;
};

export const SharedStateProvider: React.FC = ({ children }) => (
  <MyContext.Provider value={useMyState()}>{children}</MyContext.Provider>
);
