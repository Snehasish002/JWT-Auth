import express from "express"

const app = express();
const PORT = 3000;

app.get("/hello",(req, res) => {
    res.send('Hello world')
})









app.listen(PORT,() => {
    console.log(`Server is running on port:${PORT}`)
})