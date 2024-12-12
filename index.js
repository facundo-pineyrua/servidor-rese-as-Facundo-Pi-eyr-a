const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("En esta página se podran ver algunas reseñas de algunas peliculas, por ejemplo El rey león, ect.. Para ver las reseñas nomas tienen que poner en la barra de busqueda al lado del puerto 3000, tendrán que poner el nombre de la pelicula de la cual quieran ver la reseña. Las reseñas disponibles para ver son: El rey leon, Ace Ventura y Replicas, el nombre de las peliculas a la hora de buscar su reseña debe estar todo junto, por ejemplo: localhost:3000/AceVentura, y ahí le dan enter y les debería de aparecer la reseña");
});
app.get('/AceVentura', (req, res) => {
  res.send({
    pelicula: 'Ace Ventura',
    opinion: 'De las mejores peliculas de comedia que he visto en mi vida, ademas como actua Jim Carrey es lo que le da el humor a la pelicula',
    puntuacion: '10/10',
    meGusta: 148,
    noMeGusta: 58,
    usuario: 'Elpepe123',
  },);
},);
  
  app.get('/Elreyleon', (req, res) => {
    res.send({pelicula: 'El rey leon',
      opinion: 'Una ridiculez es esta pelicula, prefiero mil veces más la sirenita',
      puntuacion: '2/10',
      meGusta: 13,
      noMeGusta: 256,
      usuario: 'Jaimito-chan01',
      
    },);
  });
  app.get('/Replicas', (req, res) => {
    res.send({ pelicula: 'Replicas',
      opinion: 'increible pelicula, la recomiendo totalmente, la actuación de Keanu Reeves es espectacular, como se mete en el pesronaje en cada escena',
      puntuacion: '10/10',
      meGusta: 320,
      noMeGusta: 20,
      usuario: 'CarlitosInsano47',
    },);
  });
 
app.listen(3000);