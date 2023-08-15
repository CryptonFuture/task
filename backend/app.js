const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/task.route')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/v1', router)

app.get('/', () => {
    console.log(`Service is working`);
})

module.exports = app
