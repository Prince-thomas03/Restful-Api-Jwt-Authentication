const { urlencoded } = require('body-parser')
const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')

const connectionDB = require('./config/db')

const { errorHandler } = require('./middlewares/errorHandler')

const port = process.env.PORT || 5000


connectionDB()



const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server runs on port ${port}`))
// app.get('/api/goals', (req, res) => {
//     res.send('getgoal')
// })

