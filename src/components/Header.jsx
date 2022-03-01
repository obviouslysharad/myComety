import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ newCometyModal, setNewCometyModal }) => {
  return (
    <div className="flex p-3 shadow-indigo-200 shadow-md justify-between">
      <NavLink to="/">
        <div className="text-2xl font-bold text-indigo-900 ">COMETY</div>
      </NavLink>
      <button
        onClick={() => setNewCometyModal(!newCometyModal)}
        className="p-2 shadow-md shadow-indigo-500 rounded-lg bg-gradient-to-r from-indigo-800 to-indigo-500 text-white hover:scale-105 transition"
      >
        New Comety
      </button>
    </div>
  );
};

export default Header;
