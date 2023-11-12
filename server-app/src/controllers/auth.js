const jwt = require("jsonwebtoken")
const router = require("express").Router()
const { pool } = require("../db")

router.post("/register", async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({
      message: "Usuario o contraseña no diligenciado"
    })
  }

  const result = await pool.query("INSERT INTO users SET ?", { username, password })

  res.status(200).json({
    message: "Usuario registrado correctamente!",
    userRegistered: {
      username,
      id: result.insertId
    }
  })
})

router.post("/login", async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({
      message: "Nombre de usuario o contraseña no diligenciado"
    })
  }
  const result = await pool.query(`SELECT * FROM users WHERE username='${username}'`)

  const user = result[0]
  const validPassword = user ? user.password === password : false

  if(!user || !validPassword) {
    return res.status(401).json({
      message: "Usuario o contraseña incorrectos"
    })
  }

  const token = jwt.sign({ username: user.username, id: user.user_id }, "secretKey")

  res.status(200).json({
    message: `Has iniciado sesión como ${user.username}!`,
    token
  })
})

module.exports = router