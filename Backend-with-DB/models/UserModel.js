import { Schema, model } from "mongoose";

// create user schema
const userSchema = new Schema({

    username: {
        type: String,
        required: [true, "Username is required"],
        minLength: [4, "Mininum length should be 4"],
        maxLength: [6, "Max length is 6"],

    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age should be 18+"],
        max: [25, "Age should be less than 25"]
    }
}, {
    strict: "throw",
    timestamps: true
    // created at and updated at is stored by timestamp
})



// create user model with that schema

export const UserModel = model("user", userSchema)
// never plularize the name as mongoose automatically does that

