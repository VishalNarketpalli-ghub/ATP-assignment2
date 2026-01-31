import exp from 'express'
// this is mini express to connect with server
export const userApp = exp.Router();

let users = []



// creating own middleware
// function middleware1(req, res, next) {
//     console.log("middle 1 wear exec")

//     // res.json({ message: "Middle responding here ..." })
//     next();
// }

// function middleware2(req, res, next) {
//     console.log("middle 2 wear exec")
//     next();
// }

// its a function so has to be called every time we get a req
// app.use(middleware1)

// this is in-memory data


userApp.get("/users", /*middleware1,*/ (req, res) => {
    // res.send("<h1> Hello World anuu</h1>");
    // send response to client

    // res.json({ message: "this is response from get req handeler" })

    // send user data in res

    res.status(200).json({ message: "All users", payload: users })   //message,payload
})

// get post req, handling post req
userApp.post("/users", /*middleware2,*/(req, res) => {
    // res.json({ message: "this res if from post req handeler" })

    // get resource from req
    // resources are available in the body if req
    let newUser = req.body;
    // console.log("new User : ", newUser)
    users.push(newUser)
    res.status(200).json({ message: "user created", payload: newUser })

})





userApp.put("/users", (req, res) => {
    // res.json({ message: "this res if from put req handeler" })

    // get modified user from the user
    // find the user exist in the array or not eith id
    // if user not found - > response "User not fount"
    // if found -> response " User Found"

    let modifiedUser = req.body;
    let userIndex = users.findIndex(userObj => userObj.id === modifiedUser.id)

    if (userIndex === -1) {
        // if found user in db
        return res.status(404).json({ message: "User not found" })
    }
    // if user is not found in db
    // updatedUser.name = modifiedUser.name
    // updatedUser.age = modifiedUser.age

    let changedUser = users.splice(userIndex, 1, modifiedUser)
    // console.log(users)
    res.status(200).json({ message: "User Updated" })

})



// read user by id
userApp.get("/users/:id", (req, res) => {
    // :id is the url parameter and acts as a parametr and can be recieved by the url

    // read id from url parameter
    // console.log(req.params)
    let userId = Number(req.params.id)
    // read user by this id
    let user = users.find(userObj => userObj.id === userId)
    if (!user) return res.status(404).json({ message: "User not found" })
    res.status(200).json({ message: "user", payload: user })
})



userApp.delete("/users/:id", (req, res) => {
    // res.json({ message: "this res if from dellete req handeler" })

    // delete the user
    // find the user via url id
    // if exists -> delete the user
    // else return user not exist
    let userId = Number(req.params.id)
    let findInIndex = users.findIndex(user => userId === user.id)
    if (!findInIndex) {
        return res.status(404).json({ message: "User not found" })
    }
    users.splice(findInIndex, 1)
    res.status(200).json({
        message: "user deleted"
    })
    // console.log(users);

})