const port = 3000;

const clientPath = './../client';

const db = {
  user: 'jachamberlain',
  database: 'practice_db',
  password: '',
  config: {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false
  }
};

module.exports = { port, clientPath, db };