// @ts-nocheck
const express = require('express')
const router = express.Router()
import { title } from "process"
import prisma from "../lib/prisma"
const security = require('../middleware/security')

router.get('/:postid', async (req, res) => {
    const { postid } = req.params
    try {
      const post = await prisma.post.findUnique({
        where:{
            id: postid
        },
      })

      const comments = await prisma.comment.findMany({
        where:{
            postId: postid
        }, 
      })
      res.json({post, comments})
    } catch (error) {
      console.log(error)
    }
  })

router.post('/:postid', async (req, res) => {
    const { postid } = req.params
    const { content } = req.body
    try {
      const post = await prisma.post.findUnique({
        where:{
            id: postid
        },
      })

      const createdComment = await prisma.comment.create({
        data:{
            content: content,
            author: {
                connect: { id: post?.authorId },
              },
            post: {
                connect: { id: post.id }
            }
        },
      })
      res.json({post, createdComment})
    } catch (error) {
      console.log(error)
    }
  })

router.delete('/:postid', async (req, res) => {
    const { postid } = req.params
    const { commentid } = req.body
    try {
      const post = await prisma.post.findUnique({
        where:{
            id: postid
        },
      })

      const deletedComment = await prisma.comment.delete({
        where:{
            id: commentid
        }
      })
      res.json({post, deletedComment})
    } catch (error) {
      console.log(error)
    }
  })

module.exports = router;