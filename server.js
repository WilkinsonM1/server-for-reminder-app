const express = require('express');
const { addUser, addReminder } = require('./app');

const app = express();

app.get('/data', (req, res) => {
    let data = 'hello data';
    console.log(data);
    res.send({ data: data });
})

app.listen(3003, () => {
    console.log('listening on port 3003');
})