import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import User from "./models/user.model.js"
import jwt from "jsonwebtoken"
import 'dotenv/config'

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_SECRET)

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

    // Find the user with matching email and password
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (user) {
        // Generate a JWT token
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            }, 
            'secret1234'
        )

        // Return the token in the response
        return res.json({ status: "ok", user: token })
    } else {
        return res.json({ status: "error", user: false })
    }
})










app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})