import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./features/store";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
