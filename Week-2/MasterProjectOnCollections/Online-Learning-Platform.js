// Project story:
// -------------
// “We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

// Data setup:
// -----------
const users = [
    { id: 1, name: "Ravi", role: "student", active: true },
    { id: 2, name: "Anil", role: "admin", active: true },
    { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
    { id: 101, title: "JavaScript", price: 999, published: true },
    { id: 102, title: "React", price: 1499, published: false },
    { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
    { courseId: 101, qty: 1 },
    { courseId: 103, qty: 2 }
];

const roles = {
    admin: ["create", "update", "delete", "view"],
    student: ["view"]
};


// TASKS
// ------
// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
const getActiveUsers = users =>
    users.filter(user => user.active);


//   -> Extract names of active users
const getActiveUserNames = users =>
    users.filter(u => u.active).map(u => u.name);


//   -> Check if any admin exists
const isAdminPresent = users =>
    users.some(user => user.role === "admin");



//   -> Find user by id
const findUserById = (users, id) =>
    users.find(user => user.id === id);



//   -> Deactivate a user immutably
const deactivateUser = (users, id) =>
    users.map(user =>
        user.id === id ? { ...user, active: false } : user
    );



// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
const getPublishedCourses = courses =>
    courses.filter(course => course.published);



//   -> Sort courses by price (high → low)
const sortCoursesByPriceDesc = courses =>
    [...courses].sort((a, b) => b.price - a.price);


//   -> Extract { title, price } only
const getCourseSummary = courses =>
    courses.map(({ title, price }) => ({ title, price }));



//   -> Calculate total value of published courses
const getPublishedCoursesValue = courses =>
    courses
        .filter(course => course.published)
        .reduce((sum, course) => sum + course.price, 0);


//   -> Add a new course immutably
const addCourse = (courses, newCourse) =>
    [...courses, newCourse];




// MODULE 3: SHOPPING CART ENGINE
//   -> Merge cart with courses to get full course info
const mergeCartWithCourses = (cart, courses) =>
    cart.map(item => {
        const course = courses.find(c => c.id === item.courseId);
        return {
            ...course,
            qty: item.qty,
            totalPrice: course.price * item.qty
        };
    });



//   -> Calculate total cart amount
const getCartTotal = (cart, courses) =>
    mergeCartWithCourses(cart, courses)
        .reduce((sum, item) => sum + item.totalPrice, 0);



//   -> Increase quantity of a course (immutably)
const increaseQuantity = (cart, courseId) =>
    cart.map(item =>
        item.courseId === courseId
            ? { ...item, qty: item.qty + 1 }
            : item
    );



//   -> Remove a course from cart
const removeFromCart = (cart, courseId) =>
    cart.filter(item => item.courseId !== courseId);


//   -> Check if all cart items are paid courses
const areAllPaidCourses = (cart, courses) =>
    cart.every(item => {
        const course = courses.find(c => c.id === item.courseId);
        return course.price > 0;
    });





// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
const getRoleNames = roles =>
    Object.keys(roles);



//   -> Check if student can delete
const canStudentDelete = roles =>
    roles.student.includes("delete");


//   -> Create a flat list of all unique permissions
const getAllPermissions = roles =>
    [...new Set(Object.values(roles).flat())];



//   -> Add new role moderator immutably
const addRole = (roles, roleName, permissions) => ({
    ...roles,
    [roleName]: permissions
});

