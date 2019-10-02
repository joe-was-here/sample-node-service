import * as express from 'express';
import * as bodyParser from 'body-parser';
import templateRouter from './routes/template';

// Server setup
const server = express();
const port = 3000;


server.use(bodyParser.json());

server.use('/', templateRouter);

process.on('SIGINT', function() {
    console.log('Server received shutdown signal, exiting process');
    process.exit(0);
 });

server.listen(port, () => console.log(`Server listening on port ${port}`));