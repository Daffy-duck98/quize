require("@babel/register");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const ssr = require("./middleware/ssr");

const app = express();

const PORT = 3000;

const mainRoute = require("./routes/main.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRoute);

app.listen(PORT, () => {
  console.log(`Порт ЗАПУЩЕН!!! ${PORT}`);
});
