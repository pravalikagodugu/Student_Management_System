import React, { useContext } from "react";
import StudentContext from "../../context/StudentContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { state } = useContext(StudentContext);

  const studentsPerClass = state.students.reduce((acc, student) => {
    acc[student.class] = (acc[student.class] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="container mt-5">
    <h2 style={{ textAlign: "center", marginTop: "20px" }}>Welcome to the Dashboard</h2>;
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-primary text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Students</h5>
              <p className="card-text fs-4">{state.students.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Students Per Class</h5>
              <ul className="list-group">
                {Object.keys(studentsPerClass).map((className) => (
                  <li key={className} className="list-group-item">
                    <strong>{className}</strong>: {studentsPerClass[className]}{" "}
                    Students
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link to="/students" className="btn btn-primary">
        View All Students
      </Link>
    </div>
  );
};

export default Dashboard;