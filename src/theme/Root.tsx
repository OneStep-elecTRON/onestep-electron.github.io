import React from "react";

import App from "../../components/App";
import { GlobalStateProvider } from "../../store/GlobalStateProvider";

function Root({ children }) {
  return (
    <GlobalStateProvider>
      <App>{children}</App>
    </GlobalStateProvider>
  );
}

export default Root;
