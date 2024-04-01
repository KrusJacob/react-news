import { ThemeProvider } from "@/app/providers/ThemeProvider";
import ReactDOM from "react-dom/client";
import { NewsProvider } from "./providers/NewsProvider";
import "@/shared/index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <NewsProvider>
      <RouterProvider router={appRouter} />
    </NewsProvider>
  </ThemeProvider>
);
