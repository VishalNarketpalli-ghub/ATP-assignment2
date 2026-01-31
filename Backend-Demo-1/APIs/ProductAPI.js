import exp from 'express'
export const productApp = exp.Router();


let products = []



// get products
productApp.get("/products", (req, res) => {
    // here we are sending the status message
    res.status(200).json({ message: "this is get from product" })
})

// getproducts/<id>
productApp.get("/products/:id", (req, res) => {
    // console.log(products)
    let currentProductIndex = Number(req.params.id);
    let product = products.find(prod => currentProductIndex === prod.id)
    // console.log(product)
    if (!product) {
        return res.status(404).json({ message: "no product with product id" })
    }
    res.status(200).json({ message: "product found" }, products)
})



// we are pushing new product through post
productApp.post("/products", (req, res) => {
    let currentProduct = req.body;
    // console.log(currentProduct)
    products.push(currentProduct)
    console.log(products)
    res.status(200).json(products)
})


// 
productApp.put("/products", (req, res) => {

})

productApp.delete("/products", (req, res) => {

})
