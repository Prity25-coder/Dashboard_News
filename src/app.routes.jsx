import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Pages/Dashboard";
import Login from "./components/Pages/Auth/Login";
import News from "./components/Pages/News";
import Analytics from "./components/Pages/Analytics";
import Payout from "./components/Pages/Payout";
import Signup from "./components/Pages/Auth/Signup";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/payout",
        element: <Payout />,
      },
    ],
  },
]);

export default appRoutes;
