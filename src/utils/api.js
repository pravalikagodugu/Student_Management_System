const mockData = require("../mock/students.json");

let students = [...mockData];

export const getStudents = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(students), 500);
  });
};

export const addStudent = (student) => {
  return new Promise((resolve) => {
    const newStudent = { id: Date.now(), ...student };
    students.push(newStudent);
    setTimeout(() => resolve(newStudent), 500);
  });
};

export const updateStudent = (id, updatedData) => {
  return new Promise((resolve) => {
    students = students.map((s) => (s.id === id ? { ...s, ...updatedData } : s));
    setTimeout(() => resolve(), 500);
  });
};

export const deleteStudent = (id) => {
  return new Promise((resolve) => {
    students = students.filter((s) => s.id !== id);
    setTimeout(() => resolve(), 500);
  });
};