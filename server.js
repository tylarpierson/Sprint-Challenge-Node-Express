const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mainRouter = './Routes';

const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

server.use(morgan('dev'));
server.use(helmet());
server.use(express.json());

server.use('/api', mainRouter);

app.listen(3000, () => console.log('hey'));