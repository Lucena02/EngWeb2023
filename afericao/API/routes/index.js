var express = require('express');
var router = express.Router();
var emd = require("../controllers/emd")


// GET: os vários pedidos
router.get('/api/emd', function(req, res, next) {
  var mod = req.query.modalidade
  var ress = req.query.res

  if (mod == null && ress == "OK"){
    emd.getEmdTrue()
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção dos exames"})
    })
  }
  else if (mod != null && ress == null) {
    emd.getModalidadesX(mod)
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção dos exames"})
    })
  }
  else {
    emd.list()
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção dos exames"})
    })
  }
});


router.get("/api/emd/:id", function(req,res,next) {
  emd.getEMD(req.params.id)
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do exame"})
    })
});

router.get("/api/modalidades", function(req,res,next) {
  emd.getModalidades()
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do exame"})
    })
})


router.get("/api/modalidades", function(req,res,next) {
  emd.getModalidades()
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do exame"})
    })
})

router.get("/api/emd?res=OK", function(req,res,next) {
  emd.getEmdTrue()
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do exame"})
    })
})

router.get("/api/emd?modalidade=", function(req,res,next) {
  emd.getEmdTrue()
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do exame"})
    })
})



router.get('/api/atletas', function(req, res, next) {
  var gen = req.query.gen
  var clube = req.query.clube

  if (clube == null && gen != null){
    emd.getGenero(gen)
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do género"})
    })
  }
  else if (clube != null && gen == null) {
    emd.getClube(clube)
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do clube"})
    })
  }
  else {
    res.render('error', {error: erro, message: "Erro"})
  }
});


// Para a Interface


router.get("/api/interface1", function(req,res,next) {
  emd.listInter()
    .then(emds => {
      res.jsonp(emds)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do exame"})
    })
})


module.exports = router;
