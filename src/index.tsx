import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { greenTheme } from "./themes/greenTheme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={greenTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
