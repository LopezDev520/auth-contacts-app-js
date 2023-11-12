require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const authRouter = require("./controllers/auth")
const contactsRouter = require("./controllers/contacts")

const { verifyToken } = require("./middlewares/verifyToken")

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.set("port", process.env.PORT || 4000)

app.use("/api/auth", authRouter)
app.use("/api/contacts", verifyToken, contactsRouter)

module.exports = app