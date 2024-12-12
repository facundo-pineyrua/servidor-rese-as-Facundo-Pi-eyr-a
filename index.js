const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reseñas de Películas</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
        }
        h1 {
          color: #333;
          margin-top: 20px;
        }
        p {
          font-size: 18px;
          color: #555;
        }
      </style>
    </head>
    <body>
      <h1>Bienvenido a la página de reseñas</h1>
      <p>En esta página se pueden ver algunas reseñas de películas, por ejemplo El Rey León, etc.</p>
      <p>Para ver las reseñas disponibles, coloca el nombre de la película en la barra de búsqueda después del puerto 3000.</p>
      <p>Ejemplo: <code>localhost:3000/AceVentura</code></p>
      <p>Las reseñas disponibles son: El Rey León, Ace Ventura y Replicas.</p>
    </body>
    </html>
  `);
});

const generarResena = (pelicula, opinion, puntuacion, meGusta, noMeGusta, usuario) => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reseña - ${pelicula}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          margin: 0;
          padding: 20px;
          text-align: center;
        }
        h1 {
          font-size: 24px;
          color: #333;
        }
        p {
          font-size: 18px;
          color: #555;
        }
        .likes {
          margin-top: 20px;
          font-size: 16px;
          color: #777;
        }
      </style>
    </head>
    <body>
      <h1>${pelicula}</h1>
      <p><strong>Opinión:</strong> ${opinion}</p>
      <p><strong>Puntuación:</strong> ${puntuacion}</p>
      <p><strong>Usuario:</strong> ${usuario}</p>
      <div class="likes">
         ${meGusta} | ${noMeGusta}
      </div>
    </body>
    </html>
  `;
};

app.get('/AceVentura', (req, res) => {
  res.send(generarResena(
    'Ace Ventura',
    'De las mejores películas de comedia que he visto en mi vida, además como actúa Jim Carrey es lo que le da el humor a la película.',
    '10/10',
    148,
    58,
    'Elpepe123'
  ));
});


app.get('/Elreyleon', (req, res) => {
  res.send(generarResena(
    'El Rey León',
    'Una ridiculez es esta película, prefiero mil veces más La Sirenita.',
    '2/10',
    13,
    256,
    'Jaimito-chan01'
  ));
});


app.get('/Replicas', (req, res) => {
  res.send(generarResena(
    'Replicas',
    'Increíble película, la recomiendo totalmente. La actuación de Keanu Reeves es espectacular, cómo se mete en el personaje en cada escena.',
    '10/10',
    320,
    20,
    'CarlitosInsano47'
  ));
});

app.listen(3000);
