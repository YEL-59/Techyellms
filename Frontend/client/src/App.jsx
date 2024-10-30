import { Route, Routes } from "react-router-dom";

import AuthPage from "./Pages/auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
