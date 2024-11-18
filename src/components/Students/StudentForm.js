import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StudentContext from "../../context/StudentContext";

const StudentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    class: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (id) {
      const student = state.students.find((s) => s.id === parseInt(id));
      if (student) setFormData(student);
    }
  }, [id, state.students]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch({ type: "UPDATE_STUDENT", payload: { id: parseInt(id), ...formData } });
    } else {
      dispatch({ type: "ADD_STUDENT", payload: formData });
    }
    navigate("/students");
  };

  return (
    <div className="container mt-5">
      <h2>{id ? "Edit Student" : "Register Student"}</h2>
      <form onSubmit={handleSubmit}>
        {["name", "email", "age", "class", "address", "phone"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === "age" || field === "phone" ? "number" : "text"}
              className="form-control"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          {id ? "Update" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;