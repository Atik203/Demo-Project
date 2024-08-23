import React from "react";
import MainSheet from "../components/ui/MainSheet";

const Home: React.FC = () => {
  return (
    // <div className="grid grid-cols-12 min-h-screen">
    //   <DashboardMenu />
    //   <main className="col-span-10 bg-gray-100 p-8">
    //     <header className="mb-8">
    //       <h1 className="text-3xl font-bold">Dashboard</h1>
    //     </header>
    //     <section className="mb-8">
    //       <MainSheet />
    //     </section>
    //   </main>
    // </div>
    <div>
      <MainSheet />
    </div>
  );
};

export default Home;
