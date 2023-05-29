var express = require('express');
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:3000/api/interface1")
    .then(response => {
      res.render('index', { data: response.data, title: 'Lista de Exames' });
    })
    .catch(erro => {
      res.render("error", {message: "erro ao obter pagina inicial", error : erro})
    })
});


router.get('/:id', function(req, res, next) {
  axios.get("http://localhost:3000/api/emd/" + req.params.id)
    .then(response => {
      res.render('exameInd', { ind: response.data});
    })
    .catch(erro => {
      res.render("error", {message: "erro ao obter pagina inicial", error : erro})
    })
});

module.exports = router;
