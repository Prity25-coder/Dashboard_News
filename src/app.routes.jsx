import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Pages/Dashboard";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

export default appRoutes;
