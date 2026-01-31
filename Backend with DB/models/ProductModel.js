import { Schema, model } from "mongoose"

// create product schema
const productSchema = new Schema({
    pid: {
        type: Number,
        required: [true, "pid is required"]
    },
    productName: {
        type: String,
        required: [true, "Product name is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    }
}, {
    strict: "throw",
    timestamps: true
    // created at and updated at is stored by timestamp
})

export const ProductModel = model("product", productSchema)
