import exp from 'express'
import { ProductModel } from "../models/ProductModel.js"


export const productApp = exp.Router()


productApp.post("/products", async (req, res) => {
    let newProduct = req.body;
    let newProductDoc = new ProductModel(newProduct)
    await newProductDoc.save()
    res.status(200).json({ message: "product added ..", payload: newProductDoc })
})


productApp.get("/products", async (req, res) => {
    let product = await ProductModel.find()
    res.status(200).json({ message: "product", payload: product })
})


productApp.get("/products/:id", async (req, res) => {
    let objId = req.params.id;
    let product = await ProductModel.findById(objId)
    res.status(200).json({ message: "Product Found", payload: product })
})

productApp.put("/products/:id", async (req, res) => {
    let objId = req.params.id
    // console.log(objId)
    let updatedProduct = req.body
    // console.log(updatedProduct)
    let presentProduct = await ProductModel.findByIdAndUpdate(objId, { $set: { ...updatedProduct } }, { new: true })
    // console.log(presentProduct)
    res.status(200).json({ message: "Product Updated", payload: presentProduct })
})


productApp.delete("/products/:id", async (req, res) => {
    let objId = req.params.id
    let deletedProduct = await ProductModel.findByIdAndDelete(objId)
    res.status(200).json({ message: "Product Deleted", payload: deletedProduct })
})