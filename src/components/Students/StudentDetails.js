import React from "react";
import { Link } from "react-router-dom";

const StudentActions = () => {
  return (
    <div className="d-flex justify-content-end mb-3">
      <Link to="/register" className="btn btn-success me-2">
        Add Student
      </Link>
      <Link to="/students" className="btn btn-primary">
        View All Students
      </Link>
    </div>
  );
};

export default StudentActions;