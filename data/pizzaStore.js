const Sequelize = require('sequelize');

const database = 'pizza-luvrs';
const host = 'pizza-db.c8csoozbvs7r.us-west-1.rds.amazonaws.com';
const username = 'tkent';
const password = 'PostgreSQL';

const pgClient = new Sequelize(
  database,
  username,
  password,
  {
    host: host,
    dialect: 'postgres'
  }
);

const Pizza = pgClient.define('pizza', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  toppings: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  created: {
    type: Sequelize.STRING
  }
});

Pizza.sync().then(() => {
  console.log('postgress connection ready');
});

module.exports = Pizza;