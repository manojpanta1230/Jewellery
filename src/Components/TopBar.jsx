import { FaBars } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { PiSignOut } from "react-icons/pi";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <div className="w-full bg-white h-16 shadow-2xl text-2xl  shadow-amber-50 flex items-center justify-between px-4">
        <FaBars />
        <div className="flex items-center gap-4">
          <Link to="/userprofilecard"><FaUserAlt/></Link>
          <Link to="/login"><PiSignOut /></Link>
        </div>
      </div>
    </>
  );
};

export default TopBar;
