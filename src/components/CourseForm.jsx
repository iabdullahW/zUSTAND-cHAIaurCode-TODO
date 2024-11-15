import React, { useState } from "react";
import useCourseStore from "../store/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseName, setCourseName] = useState("");

  const handleCourseSubmit = () => {
    if (!courseName) return alert("Please enter a course name");
    addCourse({ id: Date.now(), name: courseName, completed: false });
    setCourseName(""); // Reset the input field
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Enter course name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        style={{
          padding: "10px",
          width: "70%",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleCourseSubmit}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#FFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
