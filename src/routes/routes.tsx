import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import SpreadSheet1 from "../components/ui/SpreadSheet1";
import SpreadSheet2 from "../components/ui/SpreadSheet2";
import SpreadSheet3 from "../components/ui/SpreadSheet3";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="text-center space-y-5 mt-20">
        <h1 className="mt-20 text-center text-2xl">404 Not Found</h1>
        <Link to={"/"}>
          <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Return Home
          </button>
        </Link>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sheet1",
        element: <SpreadSheet1 />,
      },
      {
        path: "/sheet2",
        element: <SpreadSheet2 />,
      },
      {
        path: "/sheet3",
        element: <SpreadSheet3 />,
      },
    ],
  },
]);

export default router;
