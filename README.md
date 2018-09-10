## Next boilerpalte with Express backend and built-in auth 
this boilerplate made with Next.js using the next-express example.

### main features
* input validation
* passport authentication
* side menu drawer in the /admin page
* user activation by email


### how to use

```sh
git clone https://github.com/obiwankenoobi/-next-express-boilerplate.git
cd /project_folter
npm install
npm run dev
```

**notes** 
* to run this project you must have Mongo installed on your machine. 
* to use the activation feature you much have SMTP provider and update the fields in [server/config.js](/server/config.js)
* to run on real server (not `localhost`) you must update all `proccess.env` fields inside [server/config.js](/server/config.js)


### TODO
* live demo.
