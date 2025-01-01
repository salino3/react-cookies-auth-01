import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ProviderApp, ProviderCompanies, ProviderUsers } from "./core";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProviderApp>
        <ProviderUsers>
          <ProviderCompanies>
            <App />
          </ProviderCompanies>
        </ProviderUsers>
      </ProviderApp>
    </BrowserRouter>
  </StrictMode>
);
