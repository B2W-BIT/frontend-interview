import express from 'express';
import profileController from './controllers/profileController';

const router = express.Router();

router.get('/', profileController.get);

export default router;
