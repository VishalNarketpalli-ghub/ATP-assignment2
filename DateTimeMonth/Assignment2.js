// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
let enrollmentDeadline = new Date("2026-1-20");
let todayDate = new Date();
console.log(todayDate < enrollmentDeadline)


// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
console.log("year : " + todayDate.getFullYear())
console.log("year : " + enrollmentDeadline.getFullYear())

console.log(todayDate.getMonth())
console.log(enrollmentDeadline.getMonth())

// todayDate.getFullYear() <= enrollmentDeadline.getFullYear() &&
// todayDate.getMonth() <= enrollmentDeadline.getMonth() &&
// todayDate.getDate() < enrollmentDeadline.getDate()

if (todayDate < enrollmentDeadline) {
    console.log("Enrollment Open")
} else {
    console.log("Enrollment close")
}


//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid


// standard utf format yyyy-mm-dd
let inputDate = "2026-02-30";
let dateParts = inputDate.split("-");
let year = parseInt(dateParts[0]);
let month = parseInt(dateParts[1]) - 1; // Months are 0-based in JavaScript Date
let day = parseInt(dateParts[2]);

let testDate = new Date(year, month, day);
if (testDate.getFullYear() === year && testDate.getMonth() === month && testDate.getDate() === day) {
    console.log("Valid date");
} else {
    console.log("Invalid date");
}