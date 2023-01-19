const React = require('react');
const Layout = require('./Layout');

function Main({ title, name }) {
  return (
    (name ? (
      <Layout title={title} name={name}>
        <h1>Квиз</h1>
        <div className="cards">
            <h3>Привет, {name}</h3>
            <a href="/logout">Разлогиниться</a>
            {/* {pivko.map((pivo) => (
              <Card key={pivo.id} pivo={pivo} />
            ))} */}

        </div>
      </Layout >
    )
      : (
        <Layout title={title} name={name}>
          <h3>Необходимо зарегистрироваться или авторизироваться, чтобы играть!</h3>
          <a href="/reg">Зарегистрироваться</a>
          <br />
          <a href="/auth">Войти</a>
        </Layout>
      ))
  );
}

module.exports = Main;