// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
const passingMarks = marks.filter(mark => mark >= 40);
const graceMarks = marks.map(mark => mark + 5);
const highestMark = marks.reduce((max, mark) => (mark > max ? mark : max), marks[0]);
const firstBelow40 = marks.find(mark => mark < 40);
const index92 = marks.findIndex(mark => mark === 92);


console.log("Passing Marks:", passingMarks);
console.log("Marks with Grace:", graceMarks);
console.log("Highest Mark:", highestMark);
console.log("First Mark Below 40:", firstBelow40);
console.log("Index of Mark 92:", index92);