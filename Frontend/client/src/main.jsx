import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Context/Auth-Context/index";
import InstructorProvider from "./Context/Instructor-Context/index";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <InstructorProvider>
      <App />
      </InstructorProvider>
     
    </AuthProvider>
  </BrowserRouter>
);
