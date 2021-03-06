const user = require('./user/user.docs');

module.exports = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Arvofinance payment service API',
    description: 'An Application to manage virtual wallets',
  },
  basePath: '/',
  host: 'localhost:5314',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    ...user,
  },
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      in: 'header',
      description: `Add token for authorization using the format Bearer (token)e.g.
        'Bearer eetelteouou1223424nkdnkdgndkg'`,
      name: 'Authorization',
    },
  },
};
