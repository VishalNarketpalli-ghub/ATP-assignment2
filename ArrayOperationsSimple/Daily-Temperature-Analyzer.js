// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const filteredTemperatures = temperatures.filter(temp => temp > 35);
const fahrenheitTemperatures = temperatures.map(temp => (temp * 9 / 5) + 32);
const averageTemperature = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
const firstAbove40 = temperatures.find(temp => temp > 40);
const index28 = temperatures.findIndex(temp => temp === 28);


console.log("Filtered Temperatures (>35):", filteredTemperatures);
console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
console.log("Average Temperature:", averageTemperature);
console.log("First Temperature Above 40:", firstAbove40);
console.log("Index of Temperature 28:", index28);

