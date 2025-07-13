// backend/routes/myBookRoutes.js
import express from 'express';
import { addBookToUser, getMyBooks, updateStatus, updateRating } from '../controllers/myBookController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// ✅ Use 'protect' instead of 'requireAuth'
router.post('/:bookId', protect, addBookToUser);
router.get('/', protect, getMyBooks);
router.patch('/:bookId/status', protect, updateStatus);
router.patch('/:bookId/rating', protect, updateRating);

export default router;
