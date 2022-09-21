// @ts-nocheck
const express = require('express')
const router = express.Router()
import prisma from "../lib/prisma"

router.get('/:postid', async (req, res) => {
    const { postid } = req.params
    try {
      res.json({post, comments})
    } catch (error) {
      console.log(error)
    }
  })

router.post('/:postid', async (req, res) => {
    const { postid } = req.params
    try {
      res.json({post, createdComment})
    } catch (error) {
      console.log(error)
    }
  })

module.exports = router;