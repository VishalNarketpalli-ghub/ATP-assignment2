import exp from "express"
import { UserModel } from "../models/UserModel.js"

export const userApp = exp.Router()

// user API routs


// create user
// read User
userApp.get('/users', async (req, res) => {
    let user = await UserModel.find()
    res.status(200).json({ message: "Users", payload: user })
})

userApp.post("/users", async (req, res) => {
    let newUser = req.body;
    // console.log(newUser)
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

userApp.put("/users/:id", async (req, res) => {
    let objId = req.params.id;
    // console.log(objId)
    let modifiedUser = req.body
    // console.log(modifiedUser)
    let presentuser = await UserModel.findByIdAndUpdate(objId, { $set: { ...modifiedUser } }, { new: true, runValidators: true })
    res.status(200).json({ message: "user updated", payload: presentuser })
})

userApp.delete("/users/:id", async (req, res) => {
    let objId = req.params.id;
    let deleteduser = await UserModel.findByIdAndDelete(objId);
    res.status(200).json({ message: "user Deleted", payload: deleteduser })
})
