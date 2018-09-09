const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const router = express.Router()
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {User} = require('../../db/models/UserSchema');
const config = require('../config');

function login(req, res) {
    User.findOneAndUpdate(
        {username: req.body.username}, 
        {login:true},
        {new:true},
        (err, userAcc) => {
            if (err) {
                console.log('err', err)
                res.send(err)
            } else if (req.user) {

                // generating login token
                var token = jwt.sign({
                    email: req.body.email, 
                    hash: req.user.hash,
                    salt: req.user.salt
                }, config.JWTsecret, {}); // assigning token which be userd to activate the signed account
                
                res.send({msg:'you logged in', user:req.user, accessToken:token})
            } 
        }
    );
}


app.prepare()
    .then(() => {
        // router.get('/', (req, res) => {
        //     const actualPage = '/login' // the file inside /pages directory which you want to render
        //     const queryParams = {} // the param from the url
        //     app.render(req, res, actualPage, queryParams) // rendering call 
        // })

        router.post('/' ,passport.authenticate('local'), function(req, res) {
            login(req, res)
        });
})

module.exports = router
