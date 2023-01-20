const React = require("react");
const Navigation = require("./Navigation");

function Layout({ title, children, name }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />

        <link rel="icon" href="/img/favicon.png" sizes="32x32" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="stylesheet" href="/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <script defer src="/js/client.js" />
        <script defer src="/js/card.js" />
        <title>{title}</title>
      </head>
      <body>
      <Navigation name={name}/>
        <div className="body__container">
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

