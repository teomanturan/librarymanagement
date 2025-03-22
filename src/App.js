import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ListBook from "./Pages/ListBook";
import FormBook from "./Pages/FormBook";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form-book" element={<FormBook />} />
        <Route path="/list-book" element={<ListBook />} />
      </Routes>
    </div>
  );
}

export default App;
