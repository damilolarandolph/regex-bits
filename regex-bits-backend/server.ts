import Express from 'express'


const app = Express()


app.get("/", (req, res) => {
    return res.send("Hello")
})


app.listen(7070)

console.log("Server Started")
