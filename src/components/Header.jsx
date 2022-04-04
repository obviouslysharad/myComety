import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ newCometyModal, setNewCometyModal }) => {
  return (
    <div className="flex p-3 shadow-lg justify-between items-center h-28 border-b-2 shadow-indigo-300">
      <NavLink to="/">
        <div className="text-5xl font-bold text-indigo-900 p-2">COMETY</div>
      </NavLink>
      <button
        onClick={() => setNewCometyModal(!newCometyModal)}
        className="btn-primary"
      >
        New Comety
      </button>
    </div>
  );
};

export default Header;
