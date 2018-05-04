const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mainRouter = require('./Routes');

const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(express.json());

server.use('/api', mainRouter);

app.listen(3000, () => console.log('hey'));