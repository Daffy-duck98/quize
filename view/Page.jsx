const React = require("react");
const Layout = require("./Layout");

function Page({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1 className="main__title">Вопрос</h1>
        <div className="quest">
          <div className="questImg">
            <img src="https://www.shkolazhizni.ru/img/content/i187/187867_or.jpg" />
          </div>
          <div className="questAsk">
            <p className="ask">
              На границу России и Китая прилетел петух. Сел точно на границу,
              абсолютно посредине. Снёс яйцо. Оно упало точно поперек: граница
              делит его посредине. Какой стране принадлежит яйцо?
            </p>
            <input type="text" name="answer" placeholder="Введите ваш ответ" />
            <div className="answer_block">
              <p class="correct">Ответ верный. Ваш счет 10 баллов</p>

              <button type="submit" className="prev">
                Ответ
              </button>
              <button type="submit" className="next">
                Следующий вопрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Page;
