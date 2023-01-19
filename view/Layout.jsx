const React = require("react");
const Navigation = require("./Navigation");

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/img/favicon.png" sizes="32x32" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/scripts/client.js" />
        <title>{title}</title>
      </head>
      <body>
        <div className="body__container">
          <Navigation />
          {children}
          <footer>
            <div className="container">&copy; QUIZE 2022</div>
          </footer>
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
