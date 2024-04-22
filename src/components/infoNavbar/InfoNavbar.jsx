import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoAirplaneOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";


import Gift from "../../assets/svg/gifts.svg";
const InfoNavbar = () => {
  return (
    <div className="w-full bg-[#123D46] flex flex-row py-2 text-white ">
      <div className="w-1/3 flex flex-row gap-2 items-center justify-center border-white ">
        <span className="font-medium ">Follow us:</span>
        <FaFacebookF />
        <BsTwitterX />
        <FaInstagram />
      </div>
      <div className="w-1/3 flex flex-row gap-2 items-center justify-center border-white ">
        <img src={Gift} alt="" />
        <span className="font-semibold text-lg " >Up to 50% off sitewide + Extra 25% off your order!</span>
      </div>
      <div className="w-1/3 flex flex-row gap-6 items-center justify-center border-white font-medium  ">
        <div className="flex flex-row items-center gap-1">
          <IoAirplaneOutline />
          <span>Track order</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <BiWorld />
          <span>English</span>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex flex-row items-center gap-1">
          <span>USD</span>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default InfoNavbar;
