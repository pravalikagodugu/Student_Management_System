import React from "react";
import StudentList from "../components/Students/StudentList";
import StudentActions from "../components/Students/StudentActions";

const StudentListPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Student Management</h1>
      <StudentActions />
      <StudentList />
    </div>
  );
};

export default StudentListPage;