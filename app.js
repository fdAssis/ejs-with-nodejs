// Imports
const express = require('express');
const app = express();
const port = 3000;

// Static Files
app.use(express.static('src'));
app.use('/css', express.static(__dirname + 'src/public/css'));

// Set View
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render();
});

app.listen(port, () => {
  console.log('App is running 🌟');
});
