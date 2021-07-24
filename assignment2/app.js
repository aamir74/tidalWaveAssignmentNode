const express = require('express')
const bodyParser = require('body-parser')

const recipesRoutes = require('./routes/recipes-routes')
const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-type, Accept, Authorization'
    )
    res.setHeader('Access-Control-Allow-Methods', 'get, post, patch, delete')
    next()
})

app.use(bodyParser.json())

app.use('/api/recipes', recipesRoutes)

app.use((req, res, next) => {
    const error = new Error('Could not find this route.', 404)
    throw error.message
})

app.listen(3000)
