const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(express.json()); // implementa o bodyparser do express
app.use(routes);

app.listen(port, () => {
  console.log('🔥 Server started at http://localhost:3000');
});
