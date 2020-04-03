var app = require('./config/custom-express')();
// Poderia ter sido feito assim também
// var customexpress = require('./config/custom-express');
// var app = customexpress();


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.');
});

