import React from "react";
import { useSelector } from "react-redux";
import { AddMember } from "./AddMember";

const Comety = ({ name }) => {
  const [toggleAddMember, setToggleAddMember] = React.useState(false);
  const memberDetails = useSelector((state) => state.performMember);

  return (
    <>
      {memberDetails.length > 0 && (
        <div className="w-screen flex flex-col justify-center absolute top-20 items-center p-10 gap-4">
          <table className="border-2 border-indigo-200">
            <thead>
              <th className="px-5 p-">Name</th>
              <th className="px-5 p-2">Amount</th>
              <th className="px-5 p-2">Status</th>
              <th className="px-5 p-2"></th>
            </thead>
            <tbody>
              {memberDetails.map((e, index) => (
                <tr className="p-5 border-2 border-indigo-200" key={index}>
                  <td className="text-center">{e.name}</td>
                  <td className="text-center">{e.amount}</td>
                  <td className="text-center">
                    <button className="px-4 text-white font-bold p-2 m-2 text-sm bg-gradient-to-r from-red-600 to-red-400 rounded-full">
                      Unpaid
                    </button>
                  </td>
                  <td className="text-center">
                    <input type="checkbox" className="p-8"></input>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button
        onClick={() => {
          setToggleAddMember(!toggleAddMember);
          console.log("hi");
        }}
        className="rounded-md bg-gradient-to-r from-indigo-900 to-indigo-500 shadow-md shadow-indigo-300 p-2 text-white hover:shadow-md hover:shadow-indigo-600"
      >
        Add Member
      </button>
      {toggleAddMember && (
        <AddMember
          toggleAddMember={toggleAddMember}
          setToggleAddMember={setToggleAddMember}
        />
      )}
    </>
  );
};

export default Comety;
