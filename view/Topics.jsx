const React = require('react');
const Layout = require('./Layout');


function Topics({ title, topicsDB }) {
  return (
    <Layout title={title}>
      <h1>Topics page</h1>
      <div>
        {topicsDB.map((topic) => (
          <a href={`/topics/${topic.id}`}>{topic.name}</a>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Topics;