const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const models = require('./models');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

// get all todos
app.get('/names', function(req, res) {
  models.names.findAll({}).then(function(names) {
    res.json(names);
  });
});

// add new name
app.post('/name', function(req, res) {
  models.user.create({
    name: req.body.name,
    email: req.body.email
  }).then(function(name) {
    res.json(name);
  });
});

app.listen(3000, function () {
    console.log('server listening on port 3000');
})