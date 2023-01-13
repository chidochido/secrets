const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

connectDB()
const port = 9000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => console.log(`server started on port ${port}`))
