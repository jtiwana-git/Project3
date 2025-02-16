import React from "react";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router";
import { AuthContextProvider } from "./context/authContext.js";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import "./App.scss";

function App() {
  const currentUser = false;

  const Layout = () => {
    return (
      <div style={{ display: "flex" }}>
        <Navbar />
        <Outlet />
      </div>
    );
  };

  // ProtectedRoute component - only logged in users can access

  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
