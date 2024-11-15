import React from "react";
import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px" }}>My Course List</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
