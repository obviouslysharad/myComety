import React from "react";
import { useSelector } from "react-redux";

const Calendar = () => {
  const members = useSelector((state) => state.performMember);
  const [interest, setInterest] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  React.useEffect(() => {
    setAmount(
      (100000 - interest * 1000 * (members.length - 1)) / members.length
    );
  }, [interest]);
  const interestRef = React.useRef();
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
    <div className=" p-2 text-black w-20 cursor-pointer hover:scale-110">
      {month}
    </div>
  ));
  return (
    <div className="flex">
      <div className="flex flex-col gap-3 font-bold uppercase pt-2 w-20 rounded-r-md">
        {renderCalendar}
      </div>
      <input
        className="p-2 rounded-lg h-10"
        placeholder="Enter the interest"
        type="number"
        ref={interestRef}
        onChange={() => {
          setInterest(interestRef.current.value);
        }}
      ></input>
      <div>
        <table className="m-40">
          <tr className="bg-slate-600 text-white">
            <th className="p-2">Id</th>
            <th className="p-2">Name</th>
            <th className="p-2">Interest</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Has Received</th>
            <th className="p-2">Paid On</th>
          </tr>
          {members.map((member, index) => (
            <tr
              className="odd:bg-slate-300 even:bg-slate-100 hover:scale-105"
              key="index"
            >
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{member.name}</td>
              <td className="p-2 text-center">{interest}%</td>
              <td className="p-2">{amount}</td>
              <td className="p-2 text-center">
                <div className="p-1 text-white rounded-full bg-red-400">No</div>
              </td>
              <td className="p-2">Unpaid</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Calendar;
