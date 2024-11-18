import React, { createContext, useReducer, useEffect } from "react";
import { getStudents } from "../utils/api";

const StudentContext = createContext();

const initialState = { students: [] };

const studentReducer = (state, action) => {
  switch (action.type) {
    case "SET_STUDENTS":
      return { ...state, students: action.payload };
    case "ADD_STUDENT":
      return { ...state, students: [...state.students, action.payload] };
    case "UPDATE_STUDENT":
      return {
        ...state,
        students: state.students.map((s) =>
          s.id === action.payload.id ? action.payload : s
        ),
      };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter((s) => s.id !== action.payload),
      };
    default:
      return state;
  }
};

export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  useEffect(() => {
    getStudents().then((data) => {
      dispatch({ type: "SET_STUDENTS", payload: data });
    });
  }, []);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;