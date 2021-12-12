import "./App.css";
import Homepage from "./pages/Homepage";
import EmployeeDasboard from "./pages/EmployeeDasboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<Homepage />} />
        <Route exact path="employee" element={<EmployeeDasboard />} />
      </Routes>
    </Router>
  );
}

export default App;
