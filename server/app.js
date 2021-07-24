const http = require('http');

const express = require('express');
// const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
});

app.listen(process.env.PORT || 3000);

