// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
let currentDate = new Date();


//        2. Extract and display:
//                     * Year
console.log("Year : " + currentDate.getFullYear())

//                     * Month (human readable)
console.log("Mont : " + currentDate.getMonth() + 1)


//                     * Date
console.log("Date : " + currentDate.getDate())


//                     * Day of week
console.log("Day of week : " + currentDate.getDay())


//                     * Hours, minutes, seconds
console.log("Hours : " + currentDate.getHours() + "  Minutes : " + currentDate.getMinutes() + "  Seconds : " + currentDate.getSeconds())


//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
console.log(currentDate.getDate() + "-" + currentDate.getMonth() + "-" + currentDate.getFullYear() + "  " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds())










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



// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
let dob = "2000-05-15";

let inputDob = dob.split("-");

// Tasks:
//         1. Calculate exact age in years
let presentDate = new Date()

let Date1 = presentDate.getDate()
let Year = presentDate.getFullYear()
let Month = presentDate.getMonth()

age = Year - inputDob[0];
if (Month < inputDob[1] - 1) {
    age--;
} else if (Month == inputDob[1] - 1) {
    if (Date1 < inputDob[2]) {
        age--;
    }
}

console.log("age is : " + age);


