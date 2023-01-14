const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},

		password: {
			type: String,
			required: false,
		},
	},

	{ timestamps: true }
)

module.exports = mongoose.model('Message', messageSchema)
