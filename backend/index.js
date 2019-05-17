require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.set('port', PORT);

app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`);
})