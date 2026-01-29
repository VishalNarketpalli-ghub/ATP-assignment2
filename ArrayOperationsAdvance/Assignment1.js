// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"
const inStockProducts = cart.filter(product => product.inStock);
const productTotals = cart.map(product => ({
    name: product.name,
    totalPrice: product.price * product.quantity
}));
const grandTotal = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
const mouseDetails = cart.find(product => product.name === "Mouse");
const keyboardIndex = cart.findIndex(product => product.name === "Keyboard");

console.log("In-Stock Products:", inStockProducts);
console.log("Product Totals:", productTotals);
console.log("Grand Total Cart Value:", grandTotal);
console.log("Mouse Details:", mouseDetails);
console.log("Index of Keyboard:", keyboardIndex);