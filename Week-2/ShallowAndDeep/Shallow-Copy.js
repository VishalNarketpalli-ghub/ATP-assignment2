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