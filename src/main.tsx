
import "./i18n";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <App />
      </HashRouter>,
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
    <Toaster
      toastOptions={{
        duration: 3000,
        style: {
          fontSize: "18px",
          fontWeight: "500",
        },
      }}
    />
  </>

)
