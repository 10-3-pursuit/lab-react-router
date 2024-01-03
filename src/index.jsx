import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // import BrowserRouter - to track URL addresses and store history (this will give us ability )
import App from "./App.jsx";
import "./index.css";

const Root = () => {
    return (
        <BrowserRouter>
        <App />
        </BrowserRouter>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(Root);
