import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Calendar = () => {
  const members = useSelector((state) => state.performMember);
  console.log(members);
  const calendar = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const renderCalendar = calendar.map((month) => (
    <div className=" p-2 rounded-r-full border-2 border-indigo-900 bg-indigo-20 text-black w-20 cursor-pointer hover:scale-105">
      {month}
    </div>
  ));
  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-2 font-bold uppercase pt-2 w-24 rounded-r-md">
        {renderCalendar}
      </div>
      <div>
        <table className="m-40">
          <tr className="bg-slate-700 text-white">
            <th className="p-2">Id</th>
            <th className="p-2">Name</th>
            <th className="p-2">Paid On</th>
          </tr>
          {members.map((member, index) => (
            <tr
              className="odd:bg-slate-400 even:bg-slate-300 hover:scale-105"
              key="index"
            >
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{member.name}</td>
              <td className="p-2">Unpaid</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Calendar;
