const React = require("react");

function Topics() {
  return (
    <div className="container">
      <h1 className="main__title">Добро пожаловать в игру!!!</h1>
      <ul className="topic__list">
        <li>
          <a href="/page" title="Програмирование">
            Програмирование
          </a>
        </li>
        <li>
          <a href="/page" title="Кино">
            Кино
          </a>
        </li>
        <li>
          <a href="/page" title="Города и страны">
            Города и страны
          </a>
        </li>
        <li>
          <a href="/page" title="Русские сказки">
            Русские сказки
          </a>
        </li>
        <li>
          <a href="/page" title="Факты о животных">
            Факты о животных
          </a>
        </li>
        <li>
          <a href="/page" title="Загадки">
            Загадки
          </a>
        </li>
      </ul>
    </div>
  );
}
module.exports = Topics;
