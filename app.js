const mysql = require('mysql');
const promisify = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'userReminders'
});

const addUser = async email => {
    try {
        
    } catch(e) {
        console.log(e.sqlMessage);
    }
};