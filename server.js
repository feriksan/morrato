const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const models = require("./model")

dotenv.config();

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded())

app.get("/", (req, res) => {
    res.json({"message":"hay"})
})

app.get("/connect", async (req, res) => {
    var produk = await models.produk.findAll()
    console.log(produk)
})
app.get("/color", async (req, res) => {
    var produk = await models.color.findAll()
    console.log(produk)
})
app.get("/brand", async (req, res) => {
    var produk = await models.brand.findAll()
    console.log(produk)
})
app.get("/family", async (req, res) => {
    var produk = await models.family.findAll()
    console.log(produk)
})
app.get("/transaction", async (req, res) => {
    var transaction = await models.transaction.findAll()
    console.log(transaction)
})
app.get("/operator", async (req, res) => {
    var operator = await models.operator.findAll()
    console.log(operator)
})
app.post("/createFamily", async (req, res) => {
    var produk = await models.family.create({
        "id":null,
        "familyName":req.body.familyName
    })
    console.log(produk.id)
})

app.post("/createBrand", async (req, res) => {
    var brand = await models.brand.create({
        "idClient":null,
        "clientName":req.body.clientName
    })
    console.log(produk.id)
})

app.post("/createColor", async (req, res) => {
    var color = await models.color.create({
        "id":null,
        "printName":req.body.familyName
    })
    console.log(produk.id)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () =>{
    console.log("SERVER BERHALAN")
    console.log(PORT)
})