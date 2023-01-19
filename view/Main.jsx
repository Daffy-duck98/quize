const React = require("react");
const Layout = require("./Layout");

function Main({ title }) {
  return (
    <Layout title={title}>
      <img src="/img/bg.png" alt="quize" title="quize" className="main__img" />
      <div className="container">
        <h1 className="main__title">Добро пожаловать в игру!!!</h1>
      </div>
    </Layout>
  );
}

module.exports = Main;
