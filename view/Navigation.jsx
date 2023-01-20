const React = require("react");

function Navigation() {
  return (
    <div className="nav__container">
      <div className="nav__inside main">
        <ul className="nav__items">
          <li className="nav__item">
            <a href="/">Квиз</a>
          </li>
          <li className="nav__item">
            <a href="/reg">Зарегистрироваться</a> | <a href="/auth">Войти</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
module.exports = Navigation;
