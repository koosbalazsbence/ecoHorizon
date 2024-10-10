const express = require("express")
const mongoose = require("mongoose")
const 
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})
