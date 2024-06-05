import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { WordContextProvider } from "./component/contexts/WordsContext.jsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WordContextProvider>
      <App />
    </WordContextProvider>
  </React.StrictMode>
);
