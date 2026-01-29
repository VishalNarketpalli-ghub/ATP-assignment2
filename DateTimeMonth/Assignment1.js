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