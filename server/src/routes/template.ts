import * as express from 'express';

const router = express.Router();

import * as templatController from '../controllers/template';

router.get('/', templatController.sendHello);

export default router;
