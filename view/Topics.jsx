const React = require("react");
const Layout = require("./Layout");

function Topics({ title, topicsDB, name }) {
  return (
    <Layout title={title} name={name}>
      <div className="container">
      <h1 className="main__title">Выберете тему:</h1>
      <ul className="topic__list">
        {topicsDB.map((topic) => (
          <li><a href={`/topics/${topic.id}`}>{topic.name}</a></li>
        ))}
       </ul>
      </div>

      {/* <div className="container">
        <h1 className="main__title">Выберете тему:</h1>
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
      </div> */}
    </Layout>
  );
}

module.exports = Topics;
