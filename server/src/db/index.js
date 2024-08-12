import pg from 'pg';
import config from '../config/env.js';

const db = new pg.Client(config.db);

// db.connect()
//   .then(() => console.log('Connected to the database'))
//   .catch(err => console.error('Database connection error:', err.stack));

export default db;
