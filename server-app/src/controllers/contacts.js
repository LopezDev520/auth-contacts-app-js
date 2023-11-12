const { pool } = require("../db")
const router = require("express").Router()

router.get("/", async (req, res) => {
  const result = await pool.query(`SELECT * FROM contacts WHERE user_id=${req.user.user_id}`)

  res.status(200).send(result)
})

router.post("/", async (req, res) => {
  const { name, email, number } = req.body

  if(!name || !email || !number) {
    return res.status(400).json({
      message: "Usuario, correo o numero no ha sido dado!"
    })
  }
  
  const set = {
    contact_name: name,
    contact_email: email,
    contact_number: number,
    user_id: req.user.user_id
  }

  const result = await pool.query("INSERT INTO contacts SET ?", set)

  res.status(200).send({
    message: "Contacto añadido!",
    contact: {
      ...set,
      contact_id: result.insertId
    }
  })
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  const result = await pool.query(`SELECT * FROM contacts WHERE contact_id=${id} AND user_id=${req.user.user_id}`)

  res.status(200).json(result)
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { name, email, number } = req.body

  const set =  {}

  if(name) set.contact_name = name
  if(email) set.contact_email = email
  if(number) set.contact_number = number

  const result = 
    await pool.query(
      `UPDATE contacts SET ? WHERE contact_id=${id} AND user_id=${req.user.user_id}`,
      set
    )

  console.log(result)

  res.status(200).json({
    message: "Contacto actualizado!"
  })
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  const result = await pool.query(`DELETE FROM contacts WHERE contact_id=${id} AND user_id=${req.user.user_id}`)

  res.status(200).json({
    message: "Contacto Eliminado!"
  })
})

module.exports = router