require('@babel/register');
const express = require('express');
const configApp = require('./config/serverConfig');

const app = express();
const port = 3000;

configApp(app);

const mainRoute = require('./routes/mainRoute');
// const authRoute = require('./routes/authRoute');
const regRoute = require('./routes/regRoute');
const logoutRoute = require('./routes/logoutRoute');
const authRoutes = require('./routes/authRoutes')


app.use('/', mainRoute);
app.use('/reg', regRoute);
app.use('/logout', logoutRoute);
app.use('/auth', authRoutes)

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
