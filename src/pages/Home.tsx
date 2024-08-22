import React from "react";

import "@fortune-sheet/react/dist/index.css";
import DashboardMenu from "../components/ui/DashboardMenu";
import SpreadSheet from "../components/ui/SpreadSheet";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <DashboardMenu />
      <main className="col-span-10 bg-gray-100 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard Content</h1>
        </header>
        <section className="mb-8">
          <SpreadSheet />
        </section>
      </main>
    </div>
  );
};

export default Home;
