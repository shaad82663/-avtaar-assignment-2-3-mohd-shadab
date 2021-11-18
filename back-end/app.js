const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());

//Importing Routes
const users = require('./routes/user');
const events = require('./routes/event');

//Routes root URL : http://localhost:4000/api/v1
app.use('/api/v1', users);
app.use('/api/v1', events);


app.use(errorMiddleware);

module.exports = app;