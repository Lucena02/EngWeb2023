var express = require('express');
var router = express.Router();
var Pessoa = require('../controllers/pessoas')

/* GET home page. */
router.get('/pessoas', function(req, res, next) {
  Pessoa.list()
    .then(dados => res.json(dados))
    .catch(erro => res.status(601).json({erro: erro}))
});

router.get('/pessoas/:id', function(req, res, next) {
    Pessoa.getPessoa(req.params.id)
      .then(dados => res.json(dados))
      .catch(erro => res.status(602).json({erro: erro}))
});


/* POST */

router.post('/pessoas', (req, res, next) => {
    Pessoa.addPessoa(req.body)
      .then(dados => res.status(201).json(dados))
      .catch(erro => res.status(522).json({erro: erro, message: "Nao foi possível adicionar o registo"}))
  })

module.exports = router;