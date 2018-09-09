const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const {User} = require('../../db/models/UserSchema');



router.get('/:token/:username' , (req, res) => { 
    const token = req.params.token;
    const username = req.params.username
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.JWTsecret,(err, decoded) => { // using the token we passed to authonticate the account
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    User.findOneAndUpdate(
        {username: username}, 
        {active:true},
        {new:true},
        (err, userAcc) => {
            if (err) {
                res.send(err)
            } else {
                res.send('Thank you! (:')
            }
        });
    })
})

module.exports = router;
