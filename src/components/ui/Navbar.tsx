import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" bg-gray-800 text-white p-3 ">
      <ul className="flex justify-center items-center gap-5">
        <li className="">
          <Link to={"/sheet1"} className="hover:text-gray-400">
            Example 1
          </Link>
        </li>
        <li className="">
          <Link to={"/sheet2"} className="hover:text-gray-400">
            Example 2
          </Link>
        </li>
        <li className="">
          <Link to={"/sheet3"} className="hover:text-gray-400">
            Example 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
