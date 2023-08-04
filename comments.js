// Create web server

// Import module
const express = require('express');
const router = express.Router();
const { getComments, createComment, deleteComment } = require('../controllers/comments');
const { protect, authorize } = require('../middleware/auth');

router
    .route('/')
    .get(getComments)
    .post(protect, authorize('user', 'admin'), createComment);

router
    .route('/:id')
    .delete(protect, authorize('user', 'admin'), deleteComment);

module.exports = router;