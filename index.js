const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("rese");
});
const reviews = [
  {
    pelicula: 'Ace Ventura',
    opinion: 'De las mejores peliculas de comedia que he visto en mi vida, ademas como actua Jim Carrey',
    puntuacion: '10/10',
    meGusta: 148,
    noMeGusta: 58,
    usuario: 'cricketbat',
  },
  {
    pelicula: 'The Lion King',
    opinion: 'A classic masterpiece with timeless music and story.',
    puntuacion: '10/10',
    meGusta: 250,
    noMeGusta: 12,
    usuario: 'movielover92',
  },
  {
    pelicula: 'Inception',
    opinion: 'Mind-bending and thought-provoking, a must-watch.',
    puntuacion: '9/10',
    meGusta: 320,
    noMeGusta: 20,
    usuario: 'dreamcatcher',
  },
];

app.listen(3000);