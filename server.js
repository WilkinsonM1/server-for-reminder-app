const express = require('express');
const bodyParser = require('body-parser');
const { addUser, addReminder, runQuery, removeReminder } = require('./app');

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.get('/data', async (req, res) => {
    let data = await runQuery();
    console.log(data);
    res.send({ data: data });
})

app.get('/register', async (req,res) => {
    addUser(req.query.email, req.query.username);
    // console.log(req.body);
    res.send('POST request to the homepage');
})

app.get('/reminder', async(req,res)=>{
    addReminder(req.query.reminder);
    res.send('POST request to the homepage');
})

app.listen(3003, () => {
    console.log('listening on port 3003');
})