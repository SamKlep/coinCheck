const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const models = require('./models');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

// get all todos
app.get('/', function(req, res, next) {
  console.log(req.params.id)
})

app.post("/name", function (req, response) {
  models.name.create({ name: req.body.name, email: req.body.email})
    .then(function (name) {
      response.send(name)
    });
});



app.listen(3000, function () {
    console.log('server listening on port 3000');
})