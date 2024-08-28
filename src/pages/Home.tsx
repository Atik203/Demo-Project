import { useState } from "react";
import DataGrid from "../components/ui/DataGrid";

const Home = () => {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <div className="mx-auto text-center">
      <button
        onClick={() => setShowSheet(!showSheet)}
        className="bg-blue-500 hover:bg-blue-700 mt-2 text-white font-bold py-2 px-2 rounded"
      >
        Show Sheet
      </button>

      {showSheet && <DataGrid />}
    </div>
  );
};

export default Home;
