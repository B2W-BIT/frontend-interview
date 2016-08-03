import express from 'express';
import timelineController from './controllers/timelineController';

const router = express.Router();

router.get('/', timelineController.get);

export default router;
