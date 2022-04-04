import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/index";

const NewCometyModal = ({ newCometyModal, setNewCometyModal }) => {
  const dispatch = useDispatch();
  if (!newCometyModal) return null;

  return ReactDOM.createPortal(
    <>
      <div
        className="absolute bg-black opacity-70 top-0 right-0 bottom-0 left-0"
        onClick={() => setNewCometyModal(false)}
      ></div>
      <form
        onSubmit={(e) => {
          dispatch(addUser({ cometyModel: setNewCometyModal, payload: e }));
        }}
        className="fixed top-1/4 w-full flex justify-center items-center"
      >
        <div className="p-10 bg-white flex flex-col items-center justify-center shadow-md shadow-indigo-500 border-2 border-indigo-500 rounded-xl gap-6 w-96 h-96">
          <label className="text-2xl text-gray-500 mb-2">
            Enter Comety Details
          </label>
          <input
            className="p-3 rounded-lg border-2 border-indigo-400 focus:border-2 focus:border-indigo-500 w-full"
            placeholder="Enter Name"
            type="text"
          />
          <input
            className="p-3 rounded-lg border-2 border-indigo-400 w-full"
            placeholder="Enter Amount"
            type="number"
          />
          <button
            type="submit"
            className="p-2 mt-2 w-full rounded-full border-2 border-indigo-400 shadow-md shadow-indigo-400 bg-gradient-to-r from-indigo-800 to-indigo-500 text-white hover:scale-105 transition"
          >
            Add Comety
          </button>
        </div>
      </form>
    </>,
    document.getElementById("modal-root")
  );
};
export default NewCometyModal;
