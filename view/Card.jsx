const React = require('react');
const Layout = require('./Layout');


function Card({ title, findTopic }) {
  return (
    <Layout title={title}>
      <div className="main-container">
        {findTopic.map((card) => (
            <div className={`container`}>
            <div className="quest">
              <div className="questImg">
                <img src={`${card.img}`} />
              </div>
              <div className="questAsk">
                <p className="ask">
                  {card.question}
                </p>
                <form id='ffform' method="post" action='/topics' >
                {/* <input name='id' type='number' value={card.id} style={{visibility: 'hidden'}} /> */}
                <input data-id={card.id} type="text" name="answer" placeholder="Введите ваш ответ" />
                <div className="answer_block">
                  <p className={`correct p${card.id}`}></p>
    
                  <button type="submit" className="prev">
                    Ответ
                  </button>
                  {/* <button type="submit" className="next">
                    Следующий вопрос
                  </button> */}
                </div>
                </form>
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