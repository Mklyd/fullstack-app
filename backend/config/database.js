import mysql from 'mysql2';

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'pos_db'
});

export default db;