import React from "react";
import useCourseStore from "../store/courseStore";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Course List</h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {courses.length === 0 && <p>No courses added yet!</p>}
        {courses.map((course) => (
          <li
            key={course.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "5px",
              backgroundColor: course.completed ? "#d4edda" : "#f8d7da",
            }}
          >
            <span
              style={{
                textDecoration: course.completed ? "line-through" : "none",
              }}
            >
              {course.name}
            </span>
            <div>
              <button
                onClick={() => toggleCourseStatus(course.id)}
                style={{
                  padding: "5px 10px",
                  marginRight: "10px",
                  backgroundColor: "#007BFF",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {course.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                onClick={() => removeCourse(course.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#FF0000",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
