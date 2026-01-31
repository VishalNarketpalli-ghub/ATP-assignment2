import exp from "express"
import { userApp } from "./APIs/UserAPI.js"
import { connect } from "mongoose"
import { productApp } from "./APIs/ProductAPI.js"
const app = exp()


// assign port
const port = 4000;

// connect to db server
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log("db is connected ..");
        app.listen(port, () => console.log("server is listening at port :"))
    } catch (error) {
        console.log("error connecting to db", error)
    }

}

app.use(exp.json());

connectDB();

app.use('/user-api', userApp);

app.use('/product-api', productApp);



// error handeling middlewear
// this is default error handeler middlewear
// function errorHandler(err, req, res, next) {
//     err.status(200).json({ message: "error", reason: err.message })
// }


app.use((err, req, res, next) => {
    err.status(200).json({ message: "error", reason: err.message })
})

// 