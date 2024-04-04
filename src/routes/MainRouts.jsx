import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { AboutUs, ContactUs, Dashboard } from "../containers";


const MainRouts = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default MainRouts;
