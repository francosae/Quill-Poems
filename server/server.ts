import prisma from "./lib/prisma"

const express = require('express')
const cors = require('cors')
const { PORT } = require('./config')
const app = express()

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) =>{
  res.status(200).send({ server_is: "up"})
})

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    res.status(500).json({
      status: "Failed Request"
    })
  }
})