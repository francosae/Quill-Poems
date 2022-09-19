// @ts-nocheck
const express = require('express')
const router = express.Router()
import { title } from "process"
import prisma from "../lib/prisma"
const security = require('../middleware/security')

router.get('/', async (req, res) => {
    try {
      const posts = await prisma.post.findMany()
      res.json(posts)
    } catch (error) {
      console.log(error)
    }
  })

router.get('/:author', async (req, res) => {
    const author  = req.params.author
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

router.get('/:author/:id', async(req, res) => {
    const id = req.params.id
    try {
        const authoredPost = await prisma.post.findUnique({
            where: {
                id: id,
            }
        })
        res.json(authoredPost)
    } catch (error) {
        console.log(error)
    }
})


router.delete('/:author/:id',  security.requireAuthenticatedUser, async(req, res) => {
    const author = req.params.author
    const id = req.params.id
    try {
        const deletedPost = await prisma.post.delete({
            where: {
                id: id,
            }
        })
        res.json(deletedPost)
    } catch (error) {
        console.log(error)
    }
})

router.post('/:author', security.requireAuthenticatedUser, async (req,res) => {
    const author = req.params.author
    const title = req.body.title
    const content = req.body.content
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: author
            }
        })

        const createdPost = await prisma.post.create({
            data: {
                author: {
                    connect: { id: user.id },
                  },
                content: content,
                title: title
            }
        })
        res.json(createdPost)
    } catch (error){
        console.log(error)
    }
})

module.exports = router;