import exp from "express"
import { UserModel } from "../models/UserModel.js"
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const userApp = exp.Router()

// user API routs


// read User
userApp.get('/users', async (req, res) => {
    let user = await UserModel.find()
    res.status(200).json({ message: "Users", payload: user })
})


// create users
userApp.post("/users", async (req, res) => {
    let newUser = req.body;
    // console.log(newUser)

    let hashedPassword = await hash(newUser.password, 12);

    newUser.password = hashedPassword;
    let newUserDoc = new UserModel(newUser)
    await newUserDoc.save()
    res.status(201).json({ message: "successfully added" })
})


// read user by obj id
userApp.get("/users/:id", async (req, res) => {
    // get obj id from url
    let objId = req.params.id;
    // find user in db
    let userObj = await UserModel.findById(objId)
    // send res
    res.status(200).json({ message: "user", payload: userObj })
})


// update user by id
userApp.put("/users/:id", async (req, res) => {
    let objId = req.params.id;
    // console.log(objId)
    let modifiedUser = req.body
    // console.log(modifiedUser)
    let presentuser = await UserModel.findByIdAndUpdate(objId, { $set: { ...modifiedUser } }, { new: true, runValidators: true })
    res.status(200).json({ message: "user updated", payload: presentuser })
})


// find by id and delete
userApp.delete("/users/:id", async (req, res) => {
    let objId = req.params.id;
    let deleteduser = await UserModel.findByIdAndDelete(objId);
    res.status(200).json({ message: "user Deleted", payload: deleteduser })
})


// user authentacation rout(login)
userApp.post("/auth", async (req, res) => {
    // let {username, password} = req.body;
    let userCred = req.body
    // check for username
    let userOfDb = await UserModel.findOne({ username: userCred.username })
    if (userOfDb === null) {
        return res.status(404).json({ message: "Invalid user" })
    }
    let statusOfValid = await compare(userCred.password, userOfDb.password)
    if (!statusOfValid) {
        return res.status(404).json({ message: "Invalid password" })
    }
    // 
    let signedToken = jwt.sign({ username: userCred.username }, "abcdef", { expiresIn: 30 })
    // { expiresIn: 10 } id we give "10" its milli sec

    // save token as http only cookie
    res.cookie("Token", signedToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })
    // send token as response
    res.status(200).json({ message: "Login successfully", token: signedToken })
})

