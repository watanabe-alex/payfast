module.exports = (app) => {

    app.get('/pagamentos', (req, res) => {
        console.log('Recebida requisição de teste na porta 3000.');
        res.send('OK');
    });

    app.post('/pagamentos/pagamento', (req, res) => {
        var pagamento = req.body;
        console.log('Processando uma requisição de um novo pagamento');
        
        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao();
        
        pagamentoDao.salva(pagamento, (erro, resultado) => {
            console.log('pagamento criado');
        });

        res.send(pagamento);
    });

}

