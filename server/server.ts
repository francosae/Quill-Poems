// @ts-nocheck
import prisma from "./lib/prisma"
const express = require('express')
const cors = require('cors')
const { PORT } = require('./config')
const app = express()
const users = require('./routes/users')
const posts = require('./routes/posts')

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
})

app.use(express.json())
app.use(cors())
app.use('/users', users)
app.use('/posts', posts)

app.get('/', (req, res) =>{
  res.status(200).send({ server_is: "up"})
})
