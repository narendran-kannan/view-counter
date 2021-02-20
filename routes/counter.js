const counterRoute = (app, fs) => {
  const dataPath = './data/data.json';

  app.get('/getcount', (req, res) => {
    const json = require("../data/data.json");
    json.views +=1;
    fs.writeFile(dataPath, JSON.stringify(json), err => {
      if(err) throw err;

    });

    res.send(json);

  });

  app.post('/endorsement', (req, res) => {
    const json = require("../data/data.json");
    if(req.body.endorsement ==1){
      json.endorsement.yes += 1
    } else {
      json.endorsement.no += 1
    }
    fs.writeFile(dataPath, JSON.stringify(json), err => {
      if(err) throw err;

    });
    res.send("Okay!");
  });
};

module.exports = counterRoute;
