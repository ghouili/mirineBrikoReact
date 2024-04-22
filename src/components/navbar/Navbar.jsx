import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";

import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();

  const iconConfig = {
    color: "#202020",
    size: "1.5em",
    // style: { strokeWidth: "0.2" },
  };

  return (
    <div className="w-full bg-white py-2 flex flex-row border shadow">
      <div className="w-1/4 flex justify-center items-center ">
        <img src={Logo} alt="LOGO_pic" className="w-32 h-auto" />
      </div>
      <div className="w-2/4 px-10 flex flex-row items-center justify-center gap-10 font-semibold ">
        <Link
          to="/"
          className={`flex flex-row items-center cursor-pointer transition ease-in-out duration-500 text-lg ${
            location.pathname === "/"
              ? "text-[#4AD295] bg-[#F1F2F8] rounded-3xl py-2 px-4"
              : "text-gray-800 hover:text-[#4AD295]"
          }`}
        >
          <span>Home</span>
          <MdKeyboardArrowDown />
        </Link>
        <Link
          to="/contact"
          className={`flex flex-row items-center cursor-pointer transition ease-in-out duration-500 text-lg ${
            location.pathname === "/contact"
              ? "text-[#4AD295] bg-[#F1F2F8] rounded-3xl py-2 px-4"
              : "text-gray-800 hover:text-[#4AD295]"
          }`}
        >
          <span>Contact</span>
          <MdKeyboardArrowDown />
        </Link>
        <Link
          to="/about"
          className={`flex flex-row items-center cursor-pointer transition ease-in-out duration-500 text-lg ${
            location.pathname === "/about"
              ? "text-[#4AD295] bg-[#F1F2F8] rounded-3xl py-2 px-4"
              : "text-gray-800 hover:text-[#4AD295]"
          }`}
        >
          <span>About</span>
          <MdKeyboardArrowDown />
        </Link>
      </div>
      <div className="w-1/4 flex flex-row justify-center items-center gap-4 ">
        <FiSearch {...iconConfig} />
        <BiUser {...iconConfig} />
        <div className="relative">
          <FaRegHeart {...iconConfig} />
          <span className="sr-only">Notifications</span>
          <div className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#4AD295] rounded-full -top-2.5 -end-2.5 ">
            <span>0</span>
          </div>
        </div>
        <div className="relative">
          <BsHandbag {...iconConfig} />
          <span className="sr-only">Notifications</span>
          <div className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#4AD295] rounded-full -top-2.5 -end-2.5 ">
            <span>0</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
