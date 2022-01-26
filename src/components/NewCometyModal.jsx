import React from "react";
import ReactDOM from "react-dom";

const NewCometyModal = ({ newCometyModal, setNewCometyModal }) => {
  if (!newCometyModal) return null;

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed bg-black opacity-70 top-0 right-0 bottom-0 left-0"
        onClick={() => setNewCometyModal(false)}
      ></div>
      <div className="fixed p-10 bg-white top-1/4 left-1/4 flex flex-col shadow-md shadow-gray-200 rounded-lg gap-4">
        <input
          className="p-3 rounded-lg border-2 border-indigo-400 focus:border-2 focus:border-indigo-500 "
          placeholder="Enter Name"
          type="text"
        ></input>
        <input
          className="p-3 rounded-lg border-2 border-indigo-400"
          placeholder="Enter Amount"
          type="number"
        ></input>
        <button
          onClick={() => {
            setNewCometyModal(false);
          }}
          className="p-2 mt-2 rounded-full border-2 border-indigo-400 shadow-md shadow-indigo-400 bg-gradient-to-r from-indigo-800 to-indigo-500 text-white hover:scale-105 transition"
        >
          Add Comety
        </button>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};
export default NewCometyModal;
