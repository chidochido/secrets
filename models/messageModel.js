const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
	content: {
		type: String,
		required: true,
	},

	password: {
		type: String,
		required: false,
	},

	expireAt: {
		type: Date,
		default: Date.now,
		expires: 120,
	},
})

module.exports = mongoose.model('Message', messageSchema)
