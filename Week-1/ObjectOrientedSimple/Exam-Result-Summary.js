// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
const marks = {
    maths: 78,
    physics: 65,
    chemistry: 82,
    english: 55
};

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90
let totalMarks = 0;
let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
    totalMarks += marks[subject];
    if (marks[subject] > highestMarks) {
        highestMarks = marks[subject];
        highestSubject = subject;
    }
}

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", totalMarks / Object.keys(marks).length);
console.log("Highest Scoring Subject:", highestSubject);

marks.computer = 90;
console.log("Updated Marks:", marks);