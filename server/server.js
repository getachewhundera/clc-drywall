const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const drywallRouter = require('./routes/drywall.router.js');
const PORT = process.env.PORT || 5007;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// app.use('/drywall', drywallRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});