import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyBooks } from "../pages/MyBooks";
import { Register } from "../pages/Registration";
import { Login } from "../pages/Login";
import { PrivateRoute } from "../components/PrivateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/mybooks"
        element={
          <PrivateRoute>
            <MyBooks />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
