const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const router = express.Router()


app.prepare()
    .then(() => {
        router.get('/:id', (req, res) => {
            const actualPage = '/post' // the file inside /pages directory which you want to render
            const queryParams = { id: req.params.id } // the param from the url
            app.render(req, res, actualPage, queryParams) // rendering call 
        })
})

module.exports = router
