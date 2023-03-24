var express = require('express');
var router = express.Router();
var Task = require('../controllers/tasks')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Task.list()
    .then(tasks => {
      res.render('landing', { data: tasks, i: undefined });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de tarefas"})
    })
});


router.get('/edit/:taskID', function(req, res, next) {
    Task.getAlunoList(req.params.taskID)
      .then(tasks => {
        res.render('landing', { data: tasks[0], i: tasks[1]});
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Erro na obtenção da lista de tarefas"})
      })
  });



router.get("/delete/:idtask", function(req,res,next) {
    Task.removeTask(req.params.idtask)
      .then(aluno => {
        res.redirect("/")
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Erro na obtenção do registo de aluno"})
      })
  })



// POST Task
router.post('/', function(req, res, next) {
    Task.addTask(req.body)
    .then(tasks => {
        res.redirect("/")
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Erro na obtenção da lista de tarefas"})
      })
  });


router.post("/edit/:idtask", function(req,res,next) {
    Task.updateTask(req.body, req.params.idtask)
    .then(tasks => {
        res.redirect("/")
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Erro na obtenção da lista de tarefas"})
      })
  });



module.exports = router;