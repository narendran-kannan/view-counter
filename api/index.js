const fs = require('fs');
const app = require('express')()
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const dataPath = './data/data.json';
app.get('/api/getcount', (req, res) => {
  const json = require("../data/data.json");
  json.views += 1;
  fs.writeFile(dataPath, JSON.stringify(json), err => {
    if (err) throw err;

  });
  res.send(json);
});

app.post('/api/endorsement', (req, res) => {
  const json = require("../data/data.json");
  if (req.body.endorsement == 1) {
    json.endorsement.yes += 1
  } else {
    json.endorsement.no += 1
  }
  fs.writeFile(dataPath, JSON.stringify(json), err => {
    if (err) throw err;
  });
  res.send("Okay!");
});

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
