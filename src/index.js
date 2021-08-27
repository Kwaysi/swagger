const express = require('express');
const swaggerUI = require('swagger-ui-express');

const doc = require('./swagger');

const app = express();

app.use('/docs', swaggerUI.serve, swaggerUI.setup(doc));

app.use('/:type', (req, res) => {
  res.send('Successfull');
});

app.listen(5314, () => {
  console.log('Listening on 5314');
});
