const router = require('express').Router();
const { BlogPost, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogPosts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogPosts/:id', async (req, res) => {
    try {
      const blogPostData = await BlogPost.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const blogPost = blogPostData.get({ plain: true });
  
      res.render('blogPost', {
        ...blogPost
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;