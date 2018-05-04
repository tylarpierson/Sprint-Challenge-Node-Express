const express = require('express');
const helmet = require('helmet');
import mainRouter from './Routes';

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api', mainRouter);

app.listen(3000, () => console.log('hey'));