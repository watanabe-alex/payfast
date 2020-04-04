function PagamentoDao(connection) {
    this._connection = connection;
}

PagamentoDao.prototype.salva = function(pagamento, callback) {
    this._connection.query('INSERT INTO pagamentos SET ?', pagamentos, callback);
}

PagamentoDao.prototype.lista = function(callback) {
    this._connection.query('SELECT * FROM pagamentos', callback);
}

PagamentoDao.prototype.buscaPorId = function(id, callback) {
    this._connection.query('SELECT * FROM pagamentos WHERE id = ?', [id], pagamentos);
}