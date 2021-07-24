const express = require('express')
const router = express.Router()
const recipes = require('../recipes.json')

router.get('/recipes', (req, res, next) => {
    
    const page = req.query.page ? req.query.page : 1
    const limit = req.query.limit ? req.query.limit : 3

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const resultRecipes = recipes.slice(startIndex, endIndex)
    res.json(resultRecipes)
})

module.exports = router
