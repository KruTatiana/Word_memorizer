import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { Provider } from "mobx-react";
import WordsStore from "./stores/WordStore.jsx";

const stores = {
  wordStore: new WordsStore(),
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider {...stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
