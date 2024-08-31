import { ThemeProvider } from "@/app/providers/ThemeProvider.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore.js";
import "@/shared/index.css";
import { RouterProvider } from "react-router";
import { appRouter } from "./appRouter.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
