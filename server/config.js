let config = {
	cookieParserSecret: process.env.cookieParserSecret || "<SECRET>", // secret for cookie parser
    JWTsecret: process.env.JWTsecret || "<SECRET>", // secret for JWT 
    nodemailerEmail: process.env.nodemailerEmail || "SMTP email address", // your email client
    nodemailerPw: process.env.nodemailerPw ||"SMTP email password", // your email password client
    smtp:"smtp.domain.com", // smtp server i.e 'smtp.domain.com'
    mongoUsername: process.env.mongoUsername || "<mongo username>", // if you have your db
    mongoPw: process.env.mongoPw || "<mongo pw>", // if you have your db
    mongoUrl: process.env.mongoUrl || "<mongo remote server url>",
    server:process.env.server || "http://localhost:3012", // your frontend server
    frontEndServer:process.env.frontEndServer || "http://localhost:3000" // your front end server
};

module.exports = config