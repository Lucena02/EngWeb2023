var http = require("http")
var url = require("url")
var fs = require("fs")


http.createServer(function(req,res) {
    var pedido = req.url 
    if (pedido == "/"){
        fs.readFile("./pags/index.html", function(err,data){
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
            if(err){
                res.write("<p>Erro na leitura do ficheiro</p>")
            } else {
                res.write(data)
            }
            res.end()
        })
    }
    else if (pedido[1] == "c") { // Ajustar condição
        var numero = pedido.substring(2,5)
        console.log(numero)
        fs.readFile("./pags/c" + numero.toString() + ".html", function(err,data){
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
            if(err){
                res.write("<p>Erro na leitura do ficheiro</p>")
            } else {
                res.write(data)
            }
            res.end()
        })
    }
    else {
        res.write("Diretoria inexistente")
        res.end()
    }
}).listen(7777)

console.log("Servidor à escuta na porta 7777")