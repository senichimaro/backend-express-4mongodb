const express = require("express")
const app = express()

require("./src/db/database")

app.listen(5000)
console.log(`Server on port ${5000}`)
app.get("/", (req,res) => res.send("Welcome Home"))