import React from "react";

const Users = ({ users }) => {
  const a = {
    name: {
      sharad: 2,
      shivansh: 3,
    },
    caste: "agarwal",
  };
  return (
    <div className="p-4  rounded-lg grid grid-cols-7 m-4 gap-10">
      {users.map((e) => {
        return (
          <div
            key={Object.keys(e)[0]}
            className=" p-8 bg-gradient-to-r text-white from-indigo-900 to-indigo-500 shadow-lg hover:scale-105 transition shadow-indigo-900 rounded-xl cursor-pointer text-lg"
          >
            <h1 className="flex justify-center text-xl p-2 font-bold uppercase">
              {Object.values(e)[0].name}
            </h1>
            <h1 className="text-center">
              Amount: {Object.values(e)[0].amount}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
