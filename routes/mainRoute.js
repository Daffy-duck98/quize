const router = require('express').Router();
const Main = require('../view/Main');
// const { User } = require('../db/models');

router.get('/', async (req, res) => {
    let user;
    let name;
    if (req.session.user_id) {
      user = await User.findOne({ where: req.session.user_id });
      name = user.login;
      const curUser = req.session.user_id;
    }
    res.renderComponent(Main, { title: 'Главная', name });
  })

  module.exports = router;