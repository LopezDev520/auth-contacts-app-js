const mysql = require("serverless-mysql")

const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "wilson2023",
    database: "auth-contacts-app"
  }
})

module.exports = { pool }