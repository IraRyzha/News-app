import { MainPage } from "@/pages/main/index.js";
import { NewsPage } from "@/pages/news/index.js";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout.js";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/news/:id", element: <NewsPage /> },
    ],
  },
]);
