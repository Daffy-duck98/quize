const React = require("react");

function Navigation({ name }) {
  return (
    <>
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
                <a class="active" href="/topics">
                  Темы
                </a>
              </li>
              {!name && (
                <>
                  <li>
                    <a href="/reg">Зарегистрироваться</a>
                  </li>
                  <li>
                    <a href="/auth">Войти</a>
                  </li>
                </>
              )}
              {name && (
                <>
                  <li className="logname">Привет, {name}!</li>
                  <li>
                    <a href="/logout">Выйти</a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <img
        src="/img/bg-1.png"
        alt="quize"
        title="quize"
        className="main__img"
      />
    </>
  );
}
module.exports = Navigation;
