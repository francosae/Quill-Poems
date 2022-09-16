
const express = require('express')
const router = express.Router()
import prisma from "../lib/prisma"

router.get('/', async (req, res) => {
    try {
      const posts = await prisma.post.findMany()
      res.json(posts)
    } catch (error) {
      console.log(error)
    }
  })

router.post('/:author', async (req, res) => {
    const author  = req.params.author
    console.log(req.params)
    try { 
     const posts = await prisma.post.findMany({
        where: {
            authorUsername: author,
        }
     })
     res.json(posts)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;