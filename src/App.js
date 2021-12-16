import "./App.css";
import Homepage from "./pages/Homepage";
import EmployeeDasboard from "./pages/EmployeeDasboard";
import BuildingsOverview from "./pages/Admin/BuildingsOverview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoomsOverview from "./pages/Admin/RoomsOverview";
import DesksOverview from "./pages/Admin/DesksOverview";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<Homepage />} />
        <Route exact path="employee" element={<EmployeeDasboard />} />
        <Route exact path="admin/buildings" element={<BuildingsOverview />} />
        <Route exact path="admin/rooms" element={<RoomsOverview />} />
        <Route exact path="admin/desks" element={<DesksOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
