import "./App.css";

import { RouterProvider } from "react-router-dom";
import appRoutes from "./app.routes";

function App() {
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
}

export default App;
