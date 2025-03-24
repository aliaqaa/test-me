import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import RouterApp from "./router/router";
import { Toaster } from "react-hot-toast";
import store  from "./redux/store/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <RouterApp />
    </Provider>
  </StrictMode>
);
