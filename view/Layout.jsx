const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/style/style.css" type="text/css" />
        <script defer src="/js/client.js" />
        <title>{title}</title>
      </head>
      <body>
        <div className="body__container">
          {/* <Navigation /> */}
          {children}
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;