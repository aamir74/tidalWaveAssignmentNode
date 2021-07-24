const express = require('express')
const router = express.Router()
const recipes = require('../recipes.json');

router.get('/shopping-list', (req, res, next) => {
    if (!req.query.ids) {
        const error = res.status(400).send({ error: "No ids passed" })
        return next(error)
    }

    const idsArray = req.query.ids.split(',')
    const result = [];

    idsArray.map(queryId => recipes.map(recipe => {
        if (queryId == recipe.id) result.push(recipe.ingredients)
    }))

    if (result.length === 0) {
        const error = res.status(404).send({ error: "Ids Not Found" })
        return next(error)
    }

    res.json(result)
})

module.exports = router
