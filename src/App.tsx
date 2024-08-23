import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
