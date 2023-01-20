const router = require('express').Router();
const Main = require('../view/Main');
const { User } = require('../db/models');
const { Topic } = require('../db/models')

router.get('/', async (req, res) => {
    let user;
    let name;
    if (req.session.user_id) {
      user = await User.findOne({ where: req.session.user_id });
      name = user.login;
      const curUser = req.session.user_id;
      // const topics = await Topic.findAll();
    }
    // const topics = await Topic.findAll();
    res.renderComponent(Main, { title: 'Главная', name });
  })

// router.get('/', async (req, res) => {
  
//   res.renderComponent(Main, {topics})

// })

 module.exports = router;