import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../actions/index.js";
import Calendar from "./Calendar";

const Comety = ({ setSelectedId, selectedName, selectedAmount }) => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.performMember);
  const [proceed, setProceed] = React.useState(false);
  const membersRender = members.map((member, index) => (
    <span className=" uppercase w-48 m-1 p-1 border-2 border-gray-400 text-black rounded-lg">
      <span className="m-2">{index + 1}.)</span>
      <span>{member.name}</span>
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
            Welcome to
            <span className="uppercase font-bold text-blue-900 m-2">
              {selectedName}
            </span>
            of
            <span className="uppercase font-bold text-green-900 m-2">
              ₹{selectedAmount}
            </span>
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
              className="border-none rounded-lg p-2 m-2"
              placeholder="Enter Name"
              name="name"
            />
            <input
              type="number"
              className="rounded-lg p-2 m-2"
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
              className="rounded-full uppercase p-1 shadow-md shadow-gray-400 hover:scale-105 mt-2 w-32 font-bold"
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
