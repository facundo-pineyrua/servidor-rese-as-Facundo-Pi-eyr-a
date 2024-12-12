const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Reseñas");
});
const reviews = [
  {
    pelicula: 'Ace Ventura',
    opinion: 'De las mejores peliculas de comedia que he visto en mi vida, ademas como actua Jim Carrey es lo que le da el humor a la pelicula',
    puntuacion: '10/10',
    meGusta: 148,
    noMeGusta: 58,
    usuario: 'Elpepe123',
  },
  {
    pelicula: 'El rey leon',
    opinion: 'Una ridiculez es esta pelicula, prefiero mil veces más la sirenita',
    puntuacion: '2/10',
    meGusta: 13,
    noMeGusta: 256,
    usuario: 'Jaimito-chan01',
  },
  {
    pelicula: 'Replicas',
    opinion: 'increible pelicula, la recomiendo totalmente, la actuación de Keanu Reeves es espectacular, como se mete en el pesronaje en cada escena',
    puntuacion: '10/10',
    meGusta: 320,
    noMeGusta: 20,
    usuario: 'CarlitosInsano47',
  },
];

app.listen(3000);