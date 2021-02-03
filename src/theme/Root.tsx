import React from "react";
import { GlobalStateProvider } from "../../store/GlobalStateProvider";

function Root({ children }) {
  return <GlobalStateProvider>{children}</GlobalStateProvider>;
}

export default Root;
