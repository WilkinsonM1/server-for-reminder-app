



// const addEmail = async (email) => {
//     try {
//         const queryStringAdd = `INSERT INTO persons(email) VALUES('${email}')`
//         let data = await promisifiedQuery(queryStringAdd);
//         console.log(data)
        
//     } catch (error) {
//         console.log(error.sqlMessage)
//     }
// }

// const addUserName = async (username) => {
//     try {
//         const queryStringAdd = `INSERT INTO persons(username) VALUES('${username}')`
//         let data = await promisifiedQuery(queryStringAdd);
//         console.log(data)
        
//     } catch (error) {
//         console.log(error.sqlMessage)
//     }
// }

// const addReminder = async (reminder) => {
//     try {
//         const queryStringAdd = `INSERT INTO reminders(reminder) VALUES('${reminder}')`
//         let data = await promisifiedQuery(queryStringAdd);
//         console.log(data)
        
//     } catch (error) {
//         console.log(error.sqlMessage)
//     }
// }

// module.exports = {
    
//     addEmail,
//     addUserName,
//     addReminder,

// }