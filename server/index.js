import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import User from "./models/user.model.js"

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://snehasishmohanty9439:Snehasish002@cluster0.l9agw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.post("/api/register", async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: "ok" })
    } catch (error) {
        console.log(error)
        res.json({ status: "error", error: "Duplicate email" })
    }
})

app.post("/api/login", async (req, res) => {
    console.log(req.body)

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (user) {
        return res.json({ status: "ok", user:true})
    }else{
        res.json({ status: "error", user:false })
    }
   

   

})









app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})