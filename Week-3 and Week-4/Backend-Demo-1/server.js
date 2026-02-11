import express from 'express';
import { userApp } from './APIs/UserAPI.js';
import { productApp } from './APIs/ProductAPI.js'

const app = express()



// create http server
// import express module 

// create server http



// now this variable app contains http server
// now assign port number so we can listen to a perticular port
app.listen(3000, () => console.log("http server is created at port 3000"))

// create API (req handelers - )
// get req handeling route(Read User)

// as we didnt start eith db we will use the main memory for now

// body parsing middleware 
app.use(express.json())



// forward req to user app when path starts with '/user-api'
app.use("/user-api", userApp)
app.use("/product-api", productApp)


