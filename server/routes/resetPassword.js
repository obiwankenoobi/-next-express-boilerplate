const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const router = express.Router()
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {User} = require('../../db/models/UserSchema');
const config = require('../config');


function resetPassword(req, res) {


    if (req.body.password.length >= 6) {
        let token = req.body.token;
        let email = req.body.email
    
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
        jwt.verify(token, config.JWTsecret, function(err, decoded) { // using the token we passed to authonticate the account
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
            User.findOne({email:email}, (e, user) => {
                if (e) console.log('error resetting password' , e)
                if (user) {
                    user.setPassword(req.body.password,(err, user) => {
                        if (err) {console.log(err)} 
                        user.save((err) => {
    
                          if (err) {
                                 console.log(err)
                                res.send('password couldne be changed')
                            } else {
                                res.send('password changed')
                            }
                        });
                    })
                }
            })
        })
    } else {
        res.send('password must be at least 6 chars')
    }

} 

app.prepare()
    .then(() => {
        router.get('/:token/:email', (req, res) => {
            // resetPassword(req , res)
            let token = req.params.token;
            let email = req.params.email
        
            const actualPage = '/resetPassword' // the file inside /pages directory which you want to render
            const queryParams = {
                token:token,
                email:email
            } // the param from the url
            app.render(req, res, actualPage, queryParams) // rendering call 
        })

        router.post('/' , (req, res) => {
            resetPassword(req , res)
        });
})

module.exports = router