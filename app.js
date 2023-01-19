require('@babel/register');
const express = require('express');

const app = express();

const PORT = 3000;

// const mainRoute = require('./routes/main.routes');
// const citatesRoute = require('./routes/citates.routes');
// const authRoute = require('./routes/auth.routes');

// app.use('/', mainRoute);
// app.use('/citates', citatesRoute);
// app.use('/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Порт ЗАПУЩЕН!!! ${PORT}`);
});
