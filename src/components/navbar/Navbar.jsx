import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="w-full bg-gray-50 py-2 flex flex-row border shadow">
      <div className="w-1/5 flex justify-center items-center ">
        <span>LOGO</span>
      </div>
      <div className="w-4/5 px-10 flex flex-row items-center gap-10 font-semibold ">
        <Link
          to="/"
          className={`cursor-pointer  hover:underline transition ease-in-out duration-500 ${
            location.pathname === "/"
              ? "text-red-700 hover:text-gray-800 underline"
              : "text-gray-800 hover:text-red-700"
          }`}
        >
          Home
        </Link>
        <Link
          to="/contact"
          className={`cursor-pointer  hover:underline transition ease-in-out duration-500 ${
            location.pathname === "/contact"
              ? "text-red-700 hover:text-gray-800 underline"
              : "text-gray-800 hover:text-red-700"
          }`}
        >
          Contact us
        </Link>
        <Link
          to="/about"
          className={`cursor-pointer  hover:underline transition ease-in-out duration-500 ${
            location.pathname === "/about"
              ? "text-red-700 hover:text-gray-800 underline"
              : "text-gray-800 hover:text-red-700"
          }`}
        >
          About us
        </Link>
      </div>
      <div className="w-1/5 flex justify-center ">
        <button className="border-2 px-4 py-1 text-white font-medium border-sky-600 bg-sky-700 rounded-md hover:text-sky-700 hover:bg-white transition ease-in-out duration-500">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Navbar;
