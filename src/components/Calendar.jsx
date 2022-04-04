import React from "react";
import { useSelector } from "react-redux";
import FindName from "./FindName";
import { DataGrid } from "@mui/x-data-grid";
const Calendar = () => {
  const members = useSelector((state) => state.performMember);
  const [interest, setInterest] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [selectedMonth, setSelectedMonth] = React.useState("");
  const [finalSelectedMember, setFinalSelectedMember] = React.useState("");

  React.useEffect(() => {
    setAmount(
      (100000 - interest * 1000 * (members.length - 1)) / members.length
    );
  }, [interest]);
  const interestRef = React.useRef();
  const calendar = [
    "JAN",
    "FEB",
    "MAR",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];

  const header = ["Id", "Name", "Interest", "Amount", "Received", "Paid On"];
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 80 },
    {
      field: "interest",
      headerName: "Interest",
      type: "number",
      width: 90,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      width: 90,
    },
    {
      field: "Received",
      headerName: "Received",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: () => {
        <input type="checkbox" />;
      },
    },
  ];
  const rows = [];
  members.forEach(function (member, index) {
    rows[index] = { id: index + 1, name: member.name };
  });
  const renderCalendar = calendar.map((month) => (
    <div className="py-3 px-1 mt-1 text-black w-20 cursor-pointer hover:scale-110 font-bold hover:px-2 transition duration-300">
      {month == selectedMonth ? (
        <div className="bg-gray-800 text-white rounded-r-full p-2">{month}</div>
      ) : (
        <div onClick={(e) => setSelectedMonth(e.target.innerText)}>{month}</div>
      )}
    </div>
  ));
  const DataTable = () => {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
  };
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-1">{renderCalendar}</div>
      {finalSelectedMember && (
        <div className="col-span-7 self-center">
          <DataTable />
        </div>
      )}
      <div
        className={
          finalSelectedMember
            ? "m-12 col-span-4 self-center "
            : "col-span-4 col-start-3 self-center "
        }
      >
        <FindName
          members={members}
          setFinalSelectedMember={setFinalSelectedMember}
          finalSelectedMember={finalSelectedMember}
          selectedMonth={selectedMonth}
        />
      </div>
    </div>
  );
};

export default Calendar;
