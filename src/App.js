import "./App.css";
import AimGame from "./aimGame/AimGameMainComp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/games/aimgame" element={<AimGame />} />
      </Routes>
    </div>
  );
}

export default App;
