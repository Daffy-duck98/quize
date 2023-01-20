const React = require("react");

function Navigation({ title, name, topics }) {
  return (
    <div className="nav__container">
      <div className="nav__inside main">
        <nav>
          <input type="checkbox" id="click" />
          <label for="click" class="menu-btn">
            <i class="fas fa-bars"></i>
          </label>
          <ul>
            <li>
              <a class="active" href="/">
                Квиз
              </a>
            </li>
            <li>
              <a href="/reg">Зарегистрировааться</a>
            </li>
            <li>
              <a href="#">Войти</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
module.exports = Navigation;
