import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const Root = () => {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };
  

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
