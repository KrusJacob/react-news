import { ThemeProvider } from "@/app/providers/ThemeProvider";
import ReactDOM from "react-dom/client";
import BaseLayout from "./layouts/BaseLayout";
import { NewsProvider } from "./providers/NewsProvider";
import "@/shared/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <NewsProvider>
      <BaseLayout />
    </NewsProvider>
  </ThemeProvider>
);
