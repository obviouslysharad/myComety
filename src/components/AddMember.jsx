import React from "react";
import { addMember } from "../actions/index.js";
import { useDispatch } from "react-redux";

export const AddMember = ({ setToggleAddMember, toggleAddMember }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="fixed black transparent-50 top-0 bottom-0 right-0 left-0 bg-black"
        onClick={() => setToggleAddMember(!toggleAddMember)}
      ></div>
      <div className="bg-white fixed top-20 right-1/2 left-1/2 border-2 border-indigo-200 w-96 rounded-xl shadow-md shadow-indigo-400">
        <button
          className="bg-red-500 rounded-full p-3 absolute right-3 top-3 hover:scale-105 hover:bg-red-600"
          onClick={() => setToggleAddMember(!toggleAddMember)}
        ></button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMember(e));
          }}
          className="flex flex-col p-4 w-full justify-center items-center gap-4 pb-6 mt-2"
        >
          <h1 className="text-xl font-bold">Member Details</h1>
          <input
            className="p-4 border-2 border-indigo-300 w-full rounded-xl"
            placeholder="Enter Name"
            name="name"
          />
          <input
            className="p-4 border-2 border-indigo-300 w-full rounded-xl"
            placeholder="Amount Paid"
            type="number"
            name="amount"
          />
          <input
            className="p-4 border-2 border-indigo-300 w-full rounded-xl"
            placeholder="Contact Number"
            type="number"
            name="contact"
          />
          <button
            type="submit"
            className="p-4 mt-2 bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-xl text-white shadow-lg hover:shadow-indigo-400"
          >
            Add Member
          </button>
        </form>
      </div>
    </>
  );
};
