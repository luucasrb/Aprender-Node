const express = require('express');
const bodyParser = require('body-parser');
const smartphone = require('../routes/teste_routes'); // Importa rota
const app = express();

app.use('/teste', smartphone);
let port = 8000;
app.listen(port, () => {
    console.log('Servidor em execução na porta ' + port);
});