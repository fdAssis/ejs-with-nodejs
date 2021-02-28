const express = require('express');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('../src/pages/index');
});

app.get('/about', (request, response) => {
  response.render('../src/pages/about');
});

app.listen(4000, () => {
  console.log('Server is running 🌟');
});
