const router = require('express').Router();
const bcrypt = require('bcrypt');
const Log = require('../view/Log');
const { User } = require('../db/models');

router
  .get('/', (req, res) => {
    res.renderComponent(Log, { title: 'Вход в систему' });
  })
  .post('/', async (req, res) => {
    try {
      const { email, password } = req.body;
      if ( !email || !password ) {
        return res.status(400).json({ message: 'Необходимо заполнить все поля', status: false });
      }
      const logUser = await User.findOne({ where: { email } });
      const validPassword = await bcrypt.compare(password, logUser.password);
      if (logUser) {
        if (validPassword) {
          req.session.user_id = logUser.id;
          return res.json({ status: 'succes', url: '/' });
        }
        return res
          .status(400)
          .json({ message: 'Неверный пароль :(', status: false });
      }
      return res.status(404).json({ status: false, message: 'Неправильный адрес электронной почты :(' });
    } catch (error) {
      console.log(error.message);
    }
  });

module.exports = router;