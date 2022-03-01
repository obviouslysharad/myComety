import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../actions/index.js";
import Calendar from "./Calendar";

const Comety = ({ setSelectedId, selectedName, selectedAmount }) => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.performMember);
  const [proceed, setProceed] = React.useState(false);
  const membersRender = members.map((member) => (
    <span className="px-4 w-48 m-1 border-2 border-black p-1 shadow-gray-400 text-black rounded-full">
      {member.name}
    </span>
  ));
  return (
    <>
      {proceed ? (
        <Calendar />
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="w-20 absolute left-2 top-20 border-2 border-black p-1 rounded-full"
            onClick={() => setSelectedId("")}
          >
            Back
          </button>
          <div className="mt-10 text-2xl">
            Welcome to {selectedName} of {selectedAmount}
          </div>
          <form
            onSubmit={(e) => {
              console.log("hi");
              dispatch(addMember(e));
            }}
            className="m-5"
          >
            <input
              type="text"
              className="border-none rounded-lg p-1 m-1"
              placeholder="Enter Name"
              name="name"
            />
            <input
              type="number"
              className="rounded-lg p-1 m-1"
              placeholder="Contact Number"
              name="contact"
            />
            <button
              className="bg-gradient-to-r from-indigo-900 to-indigo-400 p-2 rounded-lg text-white"
              type="submit"
            >
              Add Member
            </button>
          </form>
          {membersRender}
          {members.length > 0 && (
            <button
              className="rounded-full border-indigo-900 uppercase p-1 shadow-md shadow-indigo-300 hover:shadow-indigo-400 w-32"
              onClick={() => setProceed(true)}
            >
              Proceed
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Comety;
