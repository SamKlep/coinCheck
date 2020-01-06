const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const models = require('./models');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

module.exports = (app, db) => {

  //Get all names
  app.get('/names', (req, res) => {
    db.name.findAll()
    .then(name => {
      res.json(name);
    });
  });

  

}



app.listen(3000, function () {
    console.log('server listening on port 3000');
})