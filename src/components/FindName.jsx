import React from "react";
import ConfettiGenerator from "confetti-js";

const FindName = ({ members }) => {
  const [isRandom, setIsRandom] = React.useState(true);
  const [selectedMember, setSelectedMember] = React.useState("");
  const [finalSelectedMember, setFinalSelectedMember] = React.useState("");
  const [timer, setTimer] = React.useState(false);
  const pickRandom = () => {
    setSelectedMember(members[Math.floor(Math.random() * members.length)].name);
  };
  console.log("counter");
  React.useEffect(() => {
    if (document.getElementById("my-canvas")) {
      const confettiSettings = { target: "my-canvas" };
      const confetti = new ConfettiGenerator(confettiSettings);
      timer && confetti.render();
      setTimeout(() => {
        setTimer(false);
        confetti.clear();
      }, 2000);
    }
  }, [timer]); // add the var dependencies or not
  return (
    <>
      {timer && (
        <div className="fixed top-0 left-0 right-0 bottom-0">
          <canvas id="my-canvas"></canvas>
          <div>Congrats </div>
        </div>
      )}
      {finalSelectedMember ? (
        <div>Selected Member: {finalSelectedMember}</div>
      ) : (
        <div className="grid m-10 bg-slate-200 border-2 rounded-3xl p-4 shadow-md shadow-slate-400 h-72">
          <div className="flex gap-4 p-2 bg-gray-300 rounded-full justify-center">
            <button
              className={
                !isRandom
                  ? "rounded-full p-3"
                  : "rounded-full p-3 bg-gray-700 text-white font-bold"
              }
              onClick={() => setIsRandom(true)}
            >
              Random
            </button>
            <button
              className={
                isRandom
                  ? "rounded-full p-3"
                  : "rounded-full p-3 bg-gray-700 text-white font-bold"
              }
              onClick={() => setIsRandom(false)}
            >
              Manual
            </button>
          </div>
          <div className="flex gap-4 p-2 justify-center h-36 items-center">
            {isRandom ? (
              <div className="grid gap-4">
                <button
                  onClick={pickRandom}
                  className="p-3 rounded-full bg-slate-300"
                >
                  Pick Random User
                </button>
                {selectedMember && <h1>Random User is: {selectedMember}</h1>}
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
              </div>
            )}
          </div>
          <button
            className="p-2 bg-slate-300 font-bold uppercase hover:shadow-md hover:shadow-slate-400 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              setTimer(true);
              setFinalSelectedMember(selectedMember);
            }}
          >
            Select Winner
          </button>
        </div>
      )}
    </>
  );
};

export default FindName;
