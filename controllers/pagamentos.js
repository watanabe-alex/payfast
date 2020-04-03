module.exports = (app) => {

    app.get('/pagamentos', (req, res) => {
        console.log('Recebida requisição de teste na porta 3000.');
        res.send('OK');
    });

    app.post('/pagamentos/pagamento', (req, res) => {
        var pagamento = req.body;
        console.log(pagamento);
        res.send('OK.');
    });

}

