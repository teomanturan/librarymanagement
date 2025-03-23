import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ListBook from "./Pages/ListBook";
import FormBook from "./Pages/FormBook";
import ListUser from "./Pages/ListUser";
import FormUser from "./Pages/FormUser";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form-book"
          element={
            <ProtectedRoute>
              <FormBook />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form-user"
          element={
            <ProtectedRoute>
              <FormUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/list-user"
          element={
            <ProtectedRoute>
              <ListUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/list-book"
          element={
            <ProtectedRoute>
              <ListBook />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
