import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import mainRouter from './Routes';

const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(express.json());

server.use('/api', mainRouter);

app.listen(3000, () => console.log('hey'));