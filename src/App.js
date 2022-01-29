import React from "react";
import "./App.css";
import Header from "./components/Header";
import NewCometyModal from "./components/NewCometyModal";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./assets/empty.svg";

function App() {
  const users = useSelector((state) => state.performUser);
  const [newCometyModal, setNewCometyModal] = React.useState(false);
  return (
    <div className="App">
      <Header
        newCometyModal={newCometyModal}
        setNewCometyModal={setNewCometyModal}
      />
      <NewCometyModal
        newCometyModal={newCometyModal}
        setNewCometyModal={setNewCometyModal}
      />
      <Users />
      {users.length == 0 && (
        <div className="flex flex-col justify-center items-center">
          <img src="https://svgshare.com/i/dmo.svg"></img>
          <div className="p-6 text-2xl">Please add user</div>
        </div>
      )}
    </div>
  );
}

export default App;
