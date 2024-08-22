const Home = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <aside className="col-span-2 bg-gray-800 text-white p-4">
        <h3 className="text-xl font-bold mb-4">Dashboard</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              Overview
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              Reports
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              Analytics
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              Settings
            </a>
          </li>
        </ul>
      </aside>
      <main className="col-span-10 bg-gray-100 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard Content</h1>
        </header>
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-gray-700">Some content for the first card.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p className="text-gray-700">Some content for the second card.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p className="text-gray-700">Some content for the third card.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
