// @ts-nocheck
const express = require('express')
const router = express.Router()
import prisma from "../lib/prisma"
const { excludePassword } = require('../utils/users')

router.get('/', async (req, res) => {
    try {
      const users = await prisma.user.findMany()
      for (const user in users){
        excludePassword(users[user], 'password')
        // delete users[user].password
      }
      res.json(users)
    } catch (error) {
      console.log(error)
    }
  })

router.get('/:username', async (req, res) => {
  const { username } = req.params.username  
  try {
      const user = await prisma.user.findMany({
        where:{
          username: username
        },
        include: {
          writtenPosts: true,
        }
      })
      delete user[0].password
      res.json(user)
    } catch (error) {
      console.log(error)
    }
  })

module.exports = router;