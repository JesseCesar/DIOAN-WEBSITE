import express from 'express';
import { editNews, getAllNews, getNews, postNews, deleteNews  } from '../controllers/news.controller.js';
import protectRoute  from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/', getAllNews);
router.get('/:id', getNews);
router.post('/post', protectRoute, postNews);
router.put('/:id', protectRoute, editNews);
router.delete('/:id', protectRoute, deleteNews);

export default router;
