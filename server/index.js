
const express = require('express')
const app = express()
const port = 3000
const db = require('../database');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/logIn', (req, res) => {
  db.logIn(req.query, (err, Response) => {
    if (err) {
      res.sendStatus(500).end();
    } else {
      res.send(Response).status(200).end()
    }
  })
})

app.post('/newUser', (req, res) => {
  db.createProfile(req.body,(err, Response) => {
    if (err) {
      res.sendStatus(500).end();
    } else {
      res.sendStatus(200);
    }
  })
})

app.post('/newStory', (req, res) => {
  console.log(req.body)
  db.createStory(req.body, (err, Response) => {
    if (err) {
      res.sendStatus(500).end();
    } else {
      console.log(Response);
      res.sendStatus(200);
    }
  })
})

app.use(express.static(__dirname + '/../public'));


app.listen(port, () => console.log(`listening on port ${port}!`))