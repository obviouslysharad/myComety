import React from "react";
import "./App.css";
import Header from "./components/Header";
import NewCometyModal from "./components/NewCometyModal";

function App() {
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
    </div>
  );
}

export default App;
