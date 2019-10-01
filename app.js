const mysql = require('mysql');
const { promisify } = require('util');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'userReminders'
});

const promisifiedQuery = promisify(connection.query).bind(connection); 


const addUser = async (email, username) => {
    try {
        const queryStringAdd = `INSERT INTO persons(email, username) VALUES('${email}', '${username}')`;
        let data = await promisifiedQuery(queryStringAdd);
        console.log(data);

    } catch(e) {
        console.log(e.sqlMessage);
    }
};

const addReminder = async (reminder) => {
    try {
        const queryStringAdd = `INSERT INTO reminders(reminder) VALUES('${reminder}')`;
        let data = await promisifiedQuery(queryStringAdd);
        console.log(data);
        
    } catch (error) {
        console.log(error.sqlMessage);
    };
};

// addUser('mo@hotmail.cougar', 'hlmwilki');
// addReminder('need to buy cat food')

module.exports = {
    
    addUser,
    addReminder,

}