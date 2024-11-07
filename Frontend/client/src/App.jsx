import { Route, Routes } from "react-router-dom";

import AuthPage from "./Pages/auth";
import RouteGuard from "./components/Route-Guard";
import { useContext } from "react";
import { AuthContext } from "./Context/Auth-Context";
import InstructorDashboardpage from "./Pages/Instructor";
import AddNewCoursePage from "./Pages/Instructor/add-new-course";

function App() {
  const {auth}=useContext(AuthContext)
  return (
    <>
      <Routes>
      <Route
        path="/auth"
        element={
          <RouteGuard
            element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
       <Route
        path="/instructor"
        element={
          <RouteGuard
            element={<InstructorDashboardpage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
       <Route
        path="/instructor/create-new-course"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      </Routes>
    </>
  );
}

export default App;
