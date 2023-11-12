const jwt = require("jsonwebtoken")
const { pool } = require("../db")

const verifyToken = async (req, res, next) => {
  const authorization = req.get("authorization")
  const isValidHeader = authorization.toLowerCase().startsWith("bearer")

  if(!isValidHeader) {
    return res.status(400).json({
      message: "Header de Autorizacion no proveido"
    })
  }

  const [, token] = authorization.split(" ")

  if(!token) {
    return res.status(400).json({
      message: "Falta el token!"
    })
  }

  try {
    jwt.verify(token, "secretKey")
  } catch {
    return res.status(401).json({
      message: "El Token es invalido!"
    })
  }

  const decodedToken = jwt.decode(token, "secretKey")

  if (!decodedToken) {
    return res.status(401).json({
      message: "El token es invalido!"
    })
  }

  const result = await pool.query(`SELECT * FROM users WHERE user_id=${decodedToken.id}`)
  req.user = result[0]

  next()
}

module.exports = { verifyToken }