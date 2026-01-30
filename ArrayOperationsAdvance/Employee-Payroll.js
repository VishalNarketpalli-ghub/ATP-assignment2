// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus
//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"
const itEmployees = employees.filter(employee => employee.department === "IT");
const employeesWithBonus = employees.map(employee => ({
    ...employee,
    netSalary: employee.salary + (employee.salary * 0.1)
}));
const totalSalaryPayout = employees.reduce((sum, employee) => sum + employee.salary, 0);
const employee30000 = employees.find(employee => employee.salary === 30000);
const nehaIndex = employees.findIndex(employee => employee.name === "Neha");

console.log("IT Employees:", itEmployees);
console.log("Employees with Bonus:", employeesWithBonus);
console.log("Total Salary Payout:", totalSalaryPayout);
console.log("Employee with Salary 30000:", employee30000);
console.log("Index of Neha:", nehaIndex);