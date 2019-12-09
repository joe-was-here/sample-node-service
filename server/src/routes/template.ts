import * as express from 'express';

const router = express.Router();

import * as templateController from '../controllers/template';

router.get('/', templateController.sendHello);

export default router;
