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
        return data;

    } catch(e) {
        console.log(e.sqlMessage);
    }
};



const addReminder = async (reminder) => {
    try {
        // let getId = `SELECT id FROM persons`;
        // let personsId = await promisifiedQuery(getId);
        // if (personsId) {
        // , '${personsId}'
        // , persons_id
            const queryStringAdd = `INSERT INTO reminders(reminder) VALUES('${reminder}')`;
            let data = await promisifiedQuery(queryStringAdd);
            return data;
        // }
        //turn console log to return
    } catch (error) {
        console.log(error.sqlMessage);
    };
};

const listReminders = async (persons_id) => {
    try {
        const queryStringAdd = `SELECT reminder FROM reminders  JOIN persons ON persons.id=reminders.persons_id WHERE persons_id = ${persons_id};`
        let data = await promisifiedQuery(queryStringAdd)
        return data
         //turn console log to return
    } catch (error) {
        console.log(error.sqlMessage);
    };

};

const removeReminder = async (id) => {
    try {
        const queryStringDelete = `DELETE FROM reminders WHERE id = ${id}`;
        let data = await promisifiedQuery(queryStringDelete);
        console.log(data);
         //turn console log to return
    } catch(e) {
        console.log(e.sqlMessage);
    }
};

const runQuery = async () => {
    try {
        let data = await promisifiedQuery('SELECT * FROM persons');
        return data;
        
    } catch (e) {
        console.log(e.sqlMessage);
    }

    connection.end();
}

// addUser('mo@hotmail.cougar', 'hlmwilki');
// addReminder('need to buy dog food');
// removeReminder(4);

// listReminders(2);

module.exports = {
    
    addUser,
    addReminder,
    removeReminder,
    runQuery

};