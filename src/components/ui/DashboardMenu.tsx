const DashboardMenu = () => {
  return (
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
  );
};

export default DashboardMenu;
