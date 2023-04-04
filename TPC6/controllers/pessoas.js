var Pessoa = require('../models/pessoas')


// Pessoa list
module.exports.list = () => {
    return Pessoa
        .find()
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getPessoa = id => {
    return Pessoa
      .findOne({_id: id})
      .then(dados => {
        return dados;
      })
      .catch(erro => {
        return erro;
      });
}

module.exports.addPessoa = p => {
    return Pessoa
        .create(p)
        .then(dados => {
            return dados;
        })
        .catch(erro => {
            return erro
        })
}
