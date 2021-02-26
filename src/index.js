const app         = require('express')();
const Config      = require('./config');
const Routes      = require('./routes/Routes');

app.use(Routes);
app.listen(Config.PORT, () => {
    console.log(`Server started on port: ${Config.PORT}`);
});