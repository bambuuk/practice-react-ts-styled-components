import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { greenTheme } from "./themes/greenTheme";
import { GlobalStyle } from "./themes/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={greenTheme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
