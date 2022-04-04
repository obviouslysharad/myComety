import React from "react";
import ConfettiGenerator from "confetti-js";

const FindName = ({
  members,
  setFinalSelectedMember,
  finalSelectedMember,
  selectedMonth,
}) => {
  const [isRandom, setIsRandom] = React.useState(true);
  const [selectedMember, setSelectedMember] = React.useState("");
  const [canvas, setCanvas] = React.useState(false);
  const pickRandom = () => {
    setSelectedMember(members[Math.floor(Math.random() * members.length)].name);
  };
  console.log("counter");
  React.useEffect(() => {
    if (document.getElementById("my-canvas")) {
      setCanvas(true);
      const confettiSettings = { target: "my-canvas" };
      const confetti = new ConfettiGenerator(confettiSettings);
      finalSelectedMember && confetti.render();
      setTimeout(() => {
        setCanvas(false);
        confetti.clear();
      }, 4000);
    }
  }, [finalSelectedMember]);

  if (finalSelectedMember) {
    return (
      <div>
        {canvas && (
          <div className="fixed top-0 left-0 right-0 bottom-0">
            <canvas id="my-canvas"></canvas>
          </div>
        )}
        <div className="flex flex-col justify-center items-center text-lg shadow-lg bg-slate-100 border-2 border-slate-300 shadow-slate-400 rounded-3xl m-4 p-2">
          <div className="border-2 font-bold font-2xl border-b-slate-600">
            {selectedMonth}
          </div>
          <div className="rounded-2xl w-full border-2 border-gray-400 p-4 mt-2 flex justify-center">
            <div className="w-44">
              <div className="flex justify-between">
                <div>Won by:</div>
                <div>{finalSelectedMember}</div>
              </div>
              <div className="flex justify-between">
                <div>Date Started :</div>
                <div></div>
              </div>
              <div className="flex justify-between">
                <div>Total Members :</div>
                <div>{members.length}</div>
              </div>
              <div className="flex justify-between">
                <div>Interest Rate :</div>
                <div>1.5 %</div>
              </div>
              <div className="flex justify-between">
                <div>Date Drawn :</div>
                <div>1.5 %</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid m-10 bg-slate-200 border-2 rounded-3xl p-4 shadow-md shadow-slate-400">
        <div className="flex gap-4 p-2 bg-gray-300 rounded-full justify-center h-16">
          <button
            className={
              !isRandom
                ? "rounded-full p-3 hover:scale-105"
                : "rounded-full p-3 bg-gray-700 text-white font-bold"
            }
            onClick={() => setIsRandom(true)}
          >
            Random
          </button>
          <button
            className={
              isRandom
                ? "rounded-full p-3 hover:scale-105"
                : "rounded-full p-3 bg-gray-700 text-white font-bold"
            }
            onClick={() => setIsRandom(false)}
          >
            Manual
          </button>
        </div>
        <div className="flex gap-4 p-2 justify-center h-56 items-center">
          {isRandom ? (
            <div className="grid gap-4">
              <button
                onClick={pickRandom}
                className="p-3 rounded-full bg-slate-300"
              >
                Pick Random User
              </button>
              {selectedMember && (
                <div className="font-bold">
                  Random User is:{" "}
                  <span className="text-blue-900">{selectedMember}</span>
                </div>
              )}
              <div className="font-bold text-red-900">
                Standard 1.5% Interest
              </div>
            </div>
          ) : (
            <div className="grid gap-4">
              <label className="font-bold text-lg" name="RandomPerson">
                Pick Random Winner
              </label>
              <select className="p-2 border-none" name="RandomPerson">
                {members.map((member) => (
                  <option value={member.name}>{member.name}</option>
                ))}
              </select>
              <input className="p-2" placeholder="Enter Interest" />
            </div>
          )}
        </div>
        <button
          className="p-2 bg-slate-300 font-bold uppercase hover:shadow-md hover:shadow-slate-400 rounded-full"
          onClick={(e) => {
            e.preventDefault();
            setCanvas(true);
            console.log(selectedMember);
            setFinalSelectedMember(selectedMember);
          }}
        >
          Select Winner
        </button>
      </div>
    </>
  );
};

export default FindName;
