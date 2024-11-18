import React from "react";
import StudentForm from "../components/Students/StudentForm";

const StudentRegistrationPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Register a New Student</h1>
      <StudentForm />
    </div>
  );
};

export default StudentRegistrationPage;