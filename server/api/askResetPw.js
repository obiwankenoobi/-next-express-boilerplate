const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {User} = require('../../db/models/UserSchema');
const config = require('../config');
const resetPwEmailTemp = require('../Helpers/resetPwTemp');
const nodemailer = require('nodemailer');


// validate if the input is valid email
function emailValitade(email) {
    return isEmail(email)
}

function askResetPw(req, res) {

    const isEmailValidate = emailValitade(req.body.email); // validation the email

    if (isEmailValidate) {
        var token = jwt.sign({ email: req.body.email }, config.JWTsecret, {expiresIn:"2 days"}); // assigning token which be userd to activate the signed account
        User.findOne({email:req.body.email} , (e, user) => {
            if (e) {
                console.log('couldnt find acc' , e)
                res.send(e)
            }
            if (!user) {
                res.send('no user found')
                console.log('no user found')
            }
            if (user) {
                // Generate test SMTP service account from ethereal.email
                // Only needed if you don't have a real mail account for testing
                nodemailer.createTestAccount((err, mailAcc) => {
                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        host: config.smtp,
                        port: 465,
                        secure: true, // true for 465, false for other ports
                        auth: {
                            user: config.nodemailerEmail, // generated ethereal user
                            pass: config.nodemailerPw // generated ethereal password
                        }
                    });
    
                    // setup email data with unicode symbols
                    let mailOptions = {
                        from: config.nodemailerEmail, // sender address
                        to: req.body.email, // list of receivers
                        subject: `reset password`, // Subject line
                        html: resetPwEmailTemp(req, res, token)
                    }
                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message sent: %s', info.messageId);
                        // Preview only available when sending through an Ethereal account
                        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
                    });
                });
                res.send({msg:'check your email'})
            }
        })
    } else {
        res.send('invalid email')
    }

}

router.post('/', (req, res) => {
    askResetPw(req, res)
})

module.exports = router;