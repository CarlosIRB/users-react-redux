import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserList from "./pages/UserList";
import Profile from "./pages/Profile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";
import Navigation from "./components/Navigation";
import { useSelector } from "react-redux";

function App() {

  const users = useSelector((state) => state.users);

  console.log(users);

  const userLogged = useSelector((state) => state.auth.user);
  console.log(userLogged);

  return (
    <BrowserRouter>
      <Navigation />

      <div className="container">
        
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute isAllowed={!!userLogged} />}>
            <Route path="/userList" element={<UserList />} />
          </Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                redirectTo="/login"
                isAllowed={!!userLogged && userLogged.permissions.includes("analize")}
              >
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
