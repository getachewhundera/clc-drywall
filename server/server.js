const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const drywallRouter = require('./routes/drywall.router.js');
const PORT = process.env.PORT || 5007;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/
// app.use('/drywall', drywallRouter);
const cors = require('cors');
app.use(cors());

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});