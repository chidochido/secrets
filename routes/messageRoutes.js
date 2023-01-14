const express = require('express')
const router = express.Router()
const Message = require('../models/messageModel')

router.get('/', async (req, res) => {
	const messages = await Message.find({})
	res.status(200).json(messages)
})

router.post('/', async (req, res) => {
	const message = await Message.create({
		content: req.body.content,
	})

	res.status(200).json(message)
})

module.exports = router
