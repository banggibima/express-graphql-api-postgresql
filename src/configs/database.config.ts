import pg from 'pg';
import config from './config';

const database = new pg.Client({
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name,
});

export default database;
