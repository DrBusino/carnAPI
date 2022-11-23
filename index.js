const express = require('express');
const cors = require('cors');
const routeJurado = require('./src/routes/jurado.route');

const routeEscola = require('./src/routes/escola.route');
const connectToDatabase = require('./src/database/database')

const port = 3000;
const app = express();

connectToDatabase();


app.use(express.json());
app.use(cors());


app.use('/carnavalizando', routeJurado);
app.use('/carnavalizando', routeEscola);



app.listen(port, () => {
  console.log(`http://localhost:${port}/carnavalizando`);
});
