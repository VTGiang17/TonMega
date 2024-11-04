import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            lineHeightHeading1: 1.5,
            lineHeightHeading2: 1.5,
            lineHeightHeading3: 1.5,
            lineHeightHeading4: 1.5,
            lineHeightHeading5: 1.5,
          },
        },
        token: {
          // Seed Token
          fontFamily: '"Poppins", serif',
          lineHeight: 1.5,
          // Alias Token
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
