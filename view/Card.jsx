const React = require('react');
const Layout = require('./Layout');


function Card({ title, findTopic }) {
  return (
    <Layout title={title}>
      {/* <h1>Card page</h1> */}
      <div>
        {findTopic.map((card) => (
            <div className="container">
            <h1 className="main__title">Вопрос</h1>
            <div className="quest">
              <div className="questImg">
                <img src={`${card.img}`} />
              </div>
              <div className="questAsk">
                <p className="ask">
                  {card.question}
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
        ))}
      </div>
    </Layout>
  );
}

module.exports = Card;

// {topicsDB.map((topic) => (
//     <a href={`/topics/${topic.id}`}>{topic.name}</a>
//   ))}