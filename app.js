const mysql = require('mysql');
const { promisify } = require('util');




const connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'KX6mu3NhYs',
    password: 'MdMc6mt0uy',
    database: 'KX6mu3NhYs',
    port: 3306,
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



const addReminder = async (reminder, persons_id) => {
    try {
        // let getId = `SELECT id FROM persons`;
        // let personsId = await promisifiedQuery(getId);
        // if (personsId) {
        // , '${personsId}'
        // , persons_id
            const queryStringAdd = `INSERT INTO reminders(reminder, persons_id) VALUES('${reminder}', '${persons_id}')`;
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
        console.log(data)
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

const checkUser = async (username) => {
    try {
        let data = await promisifiedQuery(`SELECT username FROM persons WHERE username = '${username}';`);
        console.log(data);
        return data
    } catch (e) {
        console.log(e.sqlMessage);
    }
}

const getPersonsId = async (username) => {
    try {
        let data = await promisifiedQuery(`SELECT id FROM persons WHERE username = '${username}';`);
        console.log(data);
        return data
    } catch (e) {
        console.log(e.sqlMessage);
    }
}
// addUser('mo-wilkinson@mayo.com', 'mo');
// addReminder('need to buy dog food', '1');
// removeReminder(4);
// checkUser('m0m0');

// listReminders(2);

module.exports = {
    
    addUser,
    addReminder,
    removeReminder,
    runQuery,
    checkUser,
    listReminders,
    getPersonsId,


};