const express = require("express");
const bodyParser = require("body-parser");
const {
  addUser,
  addReminder,
  runQuery,
  removeReminder,
  listReminders,
  checkUser,
  getPersonsId,
} = require("./app");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//------------ solves CORS error -----------------//
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
//----------------------------------------------//

app.get("/data", async (req, res) => {
  let data = await runQuery();
  console.log(data);
  res.send({ data: data });
});

app.get("/register", async (req, res) => {
  addUser(req.query.email, req.query.username);
  // console.log(req.body);
  res.send("POST request to the homepage");
});

app.get("/reminder", async (req, res) => {
  addReminder(req.query.reminder);
  res.send("POST request to the homepage");
});

app.get("/checkUser", async (req, res) => {
  let data = await checkUser(req.query.username);
  res.send({ data: data[0].username});
});

app.get("/reminder-list", async (req, res) => {
  let data = await listReminders(req.query.persons_id);
  res.send({data: data});
});

app.get("/checkUserId", async (req, res) => {
  let data = await getPersonsId(req.query.username);
  res.send({ data: data[0].id });
});

app.listen(3003, () => {
  console.log("listening on port 3003");
});
