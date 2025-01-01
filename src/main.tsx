import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ProviderApp, ProviderUsers } from "./core";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProviderApp>
        <ProviderUsers>
          <App />
        </ProviderUsers>
      </ProviderApp>
    </BrowserRouter>
  </StrictMode>
);
