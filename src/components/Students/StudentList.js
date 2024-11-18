import React, { useState, useContext } from "react";
import StudentContext from "../../context/StudentContext";
import { Link } from "react-router-dom";

const StudentList = () => {
  const { state, dispatch } = useContext(StudentContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch({ type: "DELETE_STUDENT", payload: id });
    }
  };

  // Pagination logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const filteredStudents = state.students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h2>Student List</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>
                <Link
                  to={`/students/edit/${student.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {Array.from(
            { length: Math.ceil(filteredStudents.length / studentsPerPage) },
            (_, index) => (
              <li
                key={index + 1}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default StudentList;