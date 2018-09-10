const express = require('express')
const next = require('next')
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require('cors')
const RateLimit = require('express-rate-limit')
const path = require('path')
const config = require('./server/config.js')

// passport imports
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session')

// mongo imports
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const {mongoose} = require('./db/mongoose');
const {User} = require('./db/models/UserSchema.js');

const port = parseInt(process.env.PORT, 10) || 3010
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// import routes
const login = require('./server/routes/login')
const signup = require('./server/routes/signup')
const activate = require('./server/routes/activate')
const admin = require('./server/routes/admin')

let limiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
});


app.prepare()
  .then(() => {
    const server = express()

      //server.use(ddos.express); // couse 500 error BUG
      server.use(logger("dev"));
      server.use(bodyParser.json());
      server.use(bodyParser.urlencoded({ extended: false }));
      server.use(cookieParser(config.cookieParserSecret));
      server.use(express.static(path.join(__dirname, "public")));
      server.use(session());
      server.use(passport.initialize());
      server.use(passport.session());
      server.use(cors())
      //server.use(limiter) 

    // passport initialize
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    // use routes
    server.use('/login', login)
    server.use('/signup', signup)
    server.use('/activate', activate)
    server.use('/admin', admin)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
