import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import StudentListPage from "./pages/StudentListPage";
import StudentRegistrationPage from "./pages/StudentRegistrationPage";
import StudentForm from "./components/Students/StudentForm";
import { StudentProvider } from "./context/StudentContext";
import "./App.css";

const App = () => {
  return (
    <StudentProvider>
      <Router>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Student Management System</h1>
          <div style={{ marginTop: "20px" }}>
            <Link to="/dashboard" className="btn btn-primary mx-2">
              Dashboard
            </Link>
            <Link to="/register" className="btn btn-primary mx-2">
              Student Registration
            </Link>
            <Link to="/students" className="btn btn-primary mx-2">
              Student List
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<StudentListPage />} />
          <Route path="/register" element={<StudentRegistrationPage />} />
          <Route path="/students/edit/:id" element={<StudentForm />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
};

export default App;
