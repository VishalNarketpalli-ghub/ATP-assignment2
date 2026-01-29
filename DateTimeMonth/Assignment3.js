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