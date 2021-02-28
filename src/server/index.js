const express = require('express');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/:user', (request, response) => {
  const { user } = request.params;

  return response.send(`<H1> Hello ${user} <H1/>`);
});

app.listen(4000, () => {
  console.log('Server is running 🌟');
});
