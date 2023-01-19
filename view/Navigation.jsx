const React = require("react");

function Navigation() {
  return (
    <div className="nav__container">
      <div className="nav__inside main">
        <ul className="nav__items">
          <li className="nav__item">
            <a href="/">Home</a>
          </li>
          <li className="nav__item">
            <a href="/cars">Cars</a>
          </li>
          <li className="nav__item">
            <a href="/users">Users</a>
          </li>
          <li className="nav__item">
            <a href="/users">Hello,Anna</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
module.exports = Navigation;
