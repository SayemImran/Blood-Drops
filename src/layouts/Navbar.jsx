import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSquareQuestion } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="flex justify-between items-center p-6 bg-gray-800">
        <div>
          <span className="text-2xl text-white font-bold">🩸BloodDrops</span>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-8 text-white font-semibold">
              <li className="flex gap-1 items-center hover:text-red-400 rounded-md hover:border-1 hover:border-red-400 hover:bg-transparent px-2 py-1">
                <MdDashboard />
                Dashboard
              </li>
              <li className="flex gap-1 items-center hover:text-red-400 rounded-md hover:border-1 hover:border-red-400 hover:bg-transparent px-2 py-1">
                <CiSquareQuestion className="text-2xl" />
                Requests
              </li>
              <li className="flex gap-1 items-center hover:text-red-400 rounded-md hover:border-1 hover:border-red-400 hover:bg-transparent px-2 py-1">
                <CgProfile className="text-xl" />
                Donor
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div className="flex gap-2 text-white">
            <button className="font-semibold px-5 py-1 border-1 border-red-600 hover:bg-red-400 rounded-lg bg-transparent">
              login
            </button>
            <button className="font-semibold px-3 py-1 border-1 border-red-600 hover:bg-red-400 rounded-lg bg-transparent">
              signup
            </button>
          </div>
          <div className="justify-center">
            <button onClick={handleToggle} className="realtive">
              <CgProfile className="text-4xl text-white hover:text-red-400" />
            </button>
            {toggle && (
              <div className="absolute top-20 right-15 bg-gray-700 px-8 py-1 rounded-lg">
                <ul className="text-white font-semibold">
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Logout</a></li>
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
