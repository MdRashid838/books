import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TextAlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="h-20 bg-indigo-500 items-center flex flex-row justify-between px-8 drop-shadow-2xl">
        <div>
          <h1 className=" text-2xl text-white font-bold">Logo</h1>
        </div>
        <div className="hidden sm:block">
          <ul className="flex flex-row gap-3 list-none px-4  ">
            <li className="text-xl font-medium text-white color-black px-3  ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-xl font-medium text-white color-black px-3  ">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-xl font-medium text-white color-black px-3  ">
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="text-xl font-medium text-white color-black px-3  ">
              <NavLink to="/logout">Logout</NavLink>
            </li>
          </ul>
        </div>
        <button className="block sm:hidden" onClick={() => setShow(!show)}>
          {show ? <X /> : <TextAlignJustify />}
        </button>
      </div>
      <div className={`${show ? "block" : "hidden"} bg-gray-200`}>
        <ul className="flex flex-col ps-5 p-1 gap-3 list-none  ">
          <li className="text-lg color-black  ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg color-black  ">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-lg color-black  ">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="text-lg color-black  ">
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
