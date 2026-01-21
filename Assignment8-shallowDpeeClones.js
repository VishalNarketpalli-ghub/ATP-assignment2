// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

// 🎯 Task
//     1. Create a shallow copy of user

const shallowUserCopy = { ...user }

//     2. Change:
//           i. name in the copied object
shallowUserCopy.name = "babu"

//           ii. preferences.theme in the copied object
shallowUserCopy.preferences.theme = "light"

//           iii .Log both original and copied objects
console.log(user);

//           iv. Observe what changes and what doesn’t
console.log(shallowUserCopy);










// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

// 🎯 Task:
//       1. Create a deep copy of order
const orderDeepCopy = structuredClone(order)


//       2. Modify in copied object:
//             i. customer.address.city
orderDeepCopy.customer.address.city = "warangal"

//             ii. items[0].price
orderDeepCopy.items[0].price = 50000

//             iii. Verify original object remains unchanged
console.log(order);
console.log(orderDeepCopy);