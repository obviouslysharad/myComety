import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../actions/index";

const Users = () => {
  const users = useSelector((state) => state.performUser);
  const dispatch = useDispatch();
  const [displayComety, setDisplayComety] = React.useState(false);
  let userName = "";
  const handleClick = (name) => {
    userName = name;
    setDisplayComety(true);
  };
  return (
    <div className="p-4 rounded-lg grid grid-cols-7 m-4 gap-10">
      {users.map((user) => {
        return (
          <div
            key={user.id}
            onClick={(e) => handleClick(user.name)}
            className=" p-8 bg-gradient-to-r relative text-white from-indigo-900 to-indigo-500 shadow-lg hover:scale-105 transition shadow-indigo-900 rounded-xl cursor-pointer text-lg"
          >
            <button
              className="bg-red-600 rounded-full p-2 absolute top-2 right-2 hover:scale-110 hover:bg-red-700"
              onClick={() => dispatch(deleteUser(user.id))}
            ></button>
            <h1 className="flex justify-center text-xl p-2 font-bold uppercase">
              {user.name}
            </h1>
            <h1 className="text-center">Amount: {user.amount}</h1>
            <button className="bg-gray-400 hover:bg-gray-500 rounded-full p-2 absolute bottom-2 right-2"></button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
