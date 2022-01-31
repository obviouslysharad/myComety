import React from "react";
import { AddMember } from "./AddMember";

const Comety = ({ name }) => {
  const [toggleAddMember, setToggleAddMember] = React.useState(false);

  return (
    <>
      <div className="w-screen flex flex-col justify-center absolute top-20 items-center p-10 gap-4">
        <table className="border-2 border-indigo-200">
          <thead>
            <th className="px-5 p-">Name</th>
            <th className="px-5 p-2">Amount</th>
            <th className="px-5 p-2">Status</th>
            <th className="px-5 p-2"></th>
          </thead>
          <tbody>
            <tr className="p-5 border-2 border-indigo-200">
              <td className="text-center">Sharad</td>
              <td className="text-center">100</td>
              <td className="text-center">Paid</td>
              <td className="text-center">
                <input type="checkbox"></input>
              </td>
            </tr>
            <tr className="p-5 border-2 border-indigo-200">
              <td className="text-center">Sharad</td>
              <td className="text-center">100</td>
              <td className="text-center">Paid</td>
              <td className="text-center">
                <input type="checkbox"></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => {
            setToggleAddMember(!toggleAddMember);
            console.log("hi");
          }}
          className="rounded-md bg-gradient-to-r from-indigo-900 to-indigo-500 shadow-md shadow-indigo-300 p-2 text-white hover:shadow-md hover:shadow-indigo-600"
        >
          Add Member
        </button>
      </div>
      {toggleAddMember && (
        <div className=" ">
          {/* <div className="fixed opacity-50 top-0 bottom-0 left-0 right-0 flex justify-center bg-black"></div> */}
          <AddMember className="flex justify-center items-center" />
        </div>
      )}
    </>
  );
};

export default Comety;
