module.exports = (app) => {

    app.get('/pagamentos', (req, res) => {
        console.log('Recebida requisição de teste na porta 3000.');
        res.send('OK');
    });

}
