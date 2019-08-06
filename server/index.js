
const express = require('express')
const app = express()
const port = 3000
const db = require('../database');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/logIn', (req, res) => {
  // console.log('getting here', req.query);
  db.logIn(req.query, (err, Response) => {
    if (err) {
      res.send(err).status(500).end();
    } else {
      res.send(Response).status(200).end()
    }
  })
})

app.use(express.static(__dirname + '/../public'));


app.listen(port, () => console.log(`listening on port ${port}!`))