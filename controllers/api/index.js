const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes.js');
const commentRoutes = require('./commentRoutes.js');

router.use('/users', userRoutes);
router.use('/blogPosts', blogPostRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
