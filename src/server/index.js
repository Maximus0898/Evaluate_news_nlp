const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');

const dotenv = require('dotenv');
dotenv.config();

const app_key = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);

// Express app setup
const app = express();

app.use(express.static('dist'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname);

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'));
});

const port = process.env.PORT || 8082;

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

// Post req

app.post('/sentiment', async (req, res) => {
  const url = req.body.url;
  const result = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${app_key}&lang=auto&url=${url}`
  );
  console.log(result);
  try {
    const data = await result.json();
    res.send(data);
  } catch (error) {
    console.log('Error: ', error);
  }
});

/*

Version 2.

app.post('/sentiment', (req, res) => {
  const url = req.body.src;
  getResult(url, app_key)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log('Error: ', err));
});

const getResult = async (url, apikey) => {
  const response = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&lang=en&url=${url}`
  );

  const data = await response.json();
  console.log(data);
  return data;
};

*/
