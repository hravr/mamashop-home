const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();
// init express
const app = express();

// access cors (temporary)
app.use(cors());

// use static
app.use(express.static(path.resolve(__dirname, './build')));

app.use('*', (req, res) => {
  res.send(
    express.static(path.resolve(__dirname, './build/index.html'))
  )
})

// handle 404 (user errors)
app.use((req, res, next) => {
  res.status(404).send(`<h2>Oops 404</h2> <h3>We think you are lost!</h3>`);
});

// start listening
app.listen(process.env.PORT,() => console.log(`app started on 5000`));