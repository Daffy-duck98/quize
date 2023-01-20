const React = require('react');
const Layout = require('./Layout');

function Main({ title, name, topics }) {
  return (
    (name ? (
      <Layout title={title} name={name}>
        <h1>Квиз</h1>
        <div className="cards">
          <h3>Привет, {name}</h3>
          <a href="/logout">Разлогиниться</a>

        </div>
      </Layout >
    )
      : (
        <Layout title={title} name={name} topics={topics}>
          <h3>Необходимо зарегистрироваться или авторизироваться, чтобы играть!</h3>
          {/* {topics.map((topic) =>(
              <Topic key={topic.id} car={car}/>
            ))} */}
        </Layout>
      ))
  );
}

module.exports = Main;