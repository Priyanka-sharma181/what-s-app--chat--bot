const express = require("express")
const app = express()
const fileUplode = require("express-fileupload")
const router  = require("./routers/routes")
require("dotenv").config()
app.use(express.json())
app.use(fileUplode())
app.use("/",router)


app.listen(process.env.PORT,()=>{
    console.log("listining ");
})