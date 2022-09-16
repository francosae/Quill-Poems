
const express = require('express')
const router = express.Router()
import prisma from "../lib/prisma"


router.get('/', async (req, res) => {
    try {
      const users = await prisma.user.findMany()
      res.json(users)
    } catch (error) {
      console.log(error)
    }
  })

module.exports = router;