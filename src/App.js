import React from "react";
import "./App.css";
import Header from "./components/Header";
import NewCometyModal from "./components/NewCometyModal";
import Users from "./components/Users";

function App() {
  const [newCometyModal, setNewCometyModal] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  return (
    <div className="App">
      <Header
        newCometyModal={newCometyModal}
        setNewCometyModal={setNewCometyModal}
      />
      <NewCometyModal
        newCometyModal={newCometyModal}
        setNewCometyModal={setNewCometyModal}
        users={users}
        setUsers={setUsers}
      />
      <Users users={users} />
    </div>
  );
}

export default App;
