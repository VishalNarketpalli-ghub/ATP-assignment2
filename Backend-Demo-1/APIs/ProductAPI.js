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
    let productId = Number(req.params.id);
    let product = products.find(prod => productId === prod.productId)
    if (!product) {
        return res.status(404).json({ message: "no product with product id" })
    }
    res.status(200).json({ message: "product found", payload: product })
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
    let modifiedProduct = req.body;
    let productIndex = products.findIndex(prod => prod.productId === modifiedProduct.productId)

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" })
    }
    products.splice(productIndex, 1, modifiedProduct)
    res.status(200).json({ message: "Product Updated" })
})

productApp.delete("/products/:id", (req, res) => {
    let productId = Number(req.params.id);
    let productIndex = products.findIndex(prod => prod.productId === productId);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(productIndex, 1);
    res.status(200).json({ message: "Product deleted successfully" });
})
