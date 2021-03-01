const express = require('express');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

let mascots = [
  { name: 'Sammy', organization: 'DigitalOcean', birth_year: 2012 },
  { name: 'Tux', organization: 'Linux', birth_year: 1996 },
  { name: 'Moby Dock', organization: 'Docker', birth_year: 2013 },
];

let tagline =
  'No programming concept is complete without a cute animal mascot.';

app.get('/', (request, response) => {
  response.render('../src/pages/index', {
    mascots,
    tagline,
  });
});

app.get('/about', (request, response) => {
  response.render('../src/pages/about');
});

app.listen(4000, () => {
  console.log('Server is running 🌟');
});
