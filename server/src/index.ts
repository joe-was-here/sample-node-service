import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import templateRouter from './routes/template';
import logger from './winston';

// Server setup
const server = express();
const port = 3000;

// Setup logging
class MorganStream {
  write(text: string) {
    logger.info(text);
  }
}
const morganStream = new MorganStream();
server.use(morgan('combined', { stream: morganStream }));

// Using body parser for json, change this if you aren't expecting json
server.use(bodyParser.json());

// An example of route setup, the template router and controller can be removed
server.use('/', templateRouter);

// Handle docker shutdown
process.on('SIGINT', function() {
  console.log('Server received shutdown signal, exiting process');
  process.exit(0);
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
