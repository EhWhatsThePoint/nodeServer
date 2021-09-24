const express = require('express');

const app = express();
const addtoserver = express();
const about = express();
const source = express();
const documentation = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
addtoserver.get('/', (req, res) => {
  res.sendFile('/ats.html');
});
about.get('/', (req, res) => {
  res.sendFile('/about.html');
});
source.get('/', (req, res) => {
  res.sendFile('/source.html');
});
documentation.get('/', (req, res) => {
  res.sendFile('/documentation.html')
});

app.use("/about", addtoserver);
app.use("/source", addtoserver);
app.use("/documentation", addtoserver);
app.use("/addtoserver", addtoserver);

app.listen(3000, () => {
  console.log('server started');
});
