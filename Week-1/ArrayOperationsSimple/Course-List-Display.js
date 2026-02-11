// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
//     4. find() the course "react"
//     5. findIndex() of "node"

const filteredCourses = courses.filter(course => course.length > 5);
const uppercaseCourses = courses.map(course => course.toUpperCase());
const courseString = courses.reduce((acc, course, index) => {
    return acc + (index === 0 ? "" : " | ") + course.toUpperCase();
}, "");
const reactCourse = courses.find(course => course === "react");
const nodeIndex = courses.findIndex(course => course === "node");


console.log("Filtered Courses (length > 5):", filteredCourses);
console.log("Uppercase Courses:", uppercaseCourses);
console.log("Course String:", courseString);
console.log("Found Course 'react':", reactCourse);
console.log("Index of 'node':", nodeIndex);






