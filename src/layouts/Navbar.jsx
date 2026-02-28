import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSquareQuestion } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router";
import useAuthContext from "../hook/useAuthContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const { user } = useAuthContext();
  return (
    <>
      <div className="flex justify-between items-center p-6 bg-gray-800">
        <div>
          <Link to="/">
            <button className="text-2xl text-white font-bold">
              🩸BloodDrops
            </button>
          </Link>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-8 text-white font-semibold">
              <Link to="/dashboard">
                <li className="flex gap-1 items-center hover:text-red-400 rounded-md hover:border-1 hover:border-red-400 hover:bg-transparent px-2 py-1">
                  <MdDashboard />
                  Dashboard
                </li>
              </Link>
              <Link to="/requests">
                <li className="flex gap-1 items-center hover:text-red-400 rounded-md hover:border-1 hover:border-red-400 hover:bg-transparent px-2 py-1">
                  <CiSquareQuestion className="text-2xl" />
                  Requests
                </li>
              </Link>
              <Link to="donors">
                <li className="flex gap-1 items-center hover:text-red-400 rounded-md hover:border-1 hover:border-red-400 hover:bg-transparent px-2 py-1">
                  <CgProfile className="text-xl" />
                  Donor
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          {user ? (
            ""
          ) : (
            <div className="flex gap-2 text-white">
              <Link to="/login">
                <button className="font-semibold px-5 py-1 border-1 border-red-600 hover:bg-red-400 rounded-lg bg-transparent">
                  login
                </button>
              </Link>
              <Link to="/register">
                <button className="font-semibold px-3 py-1 border-1 border-red-600 hover:bg-red-400 rounded-lg bg-transparent">
                  signup
                </button>
              </Link>
            </div>
          )}
          <div className="justify-center">
            <button onClick={handleToggle} className="realtive">
              <CgProfile className="text-4xl text-white hover:text-red-400" />
            </button>
            {toggle && (
              <div className="absolute top-20 right-15 bg-gray-700 px-8 py-1 rounded-lg">
                <ul className="text-white font-semibold">
                  <Link to="/profile">
                    <li>Profile</li>
                  </Link>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
