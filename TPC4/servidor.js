
var http = require("http")
var paginas = require("./paginas")
var axios = require("axios")
var static = require("./staticServer")
const { parse } = require("querystring")

// Auxiliar
function collectRequestBodyData(request, callback){
    if(request.headers["content-type"] === "application/x-www-form-urlencoded") {
        let body = " ";
        request.on("data", chunk => {
            body += chunk.toString();
        })
        request.on("end", () => {
            callback(parse(body));
        })
    }
    else {
        callback(null)
    }
}



var taskServer = http.createServer(function(req,res){
    console.log(req.method)
    if(static.staticResource(req)){
        static.serveStaticResource(req, res)
    }
    else{

        switch(req.method){
            case "GET":
                console.log(req.method)
                if (req.url == "/"){
                    axios.get("http://localhost:3000/tasks").then(response => {
                        var dataa = response.data

                        res.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
                        res.write(paginas.paginaNormal(dataa, undefined))
                        res.end()
                    })
                    .catch(function(erro){
                        res.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
                        res.write("<p>Nao foi possivel obter o resultado desejado... Erro:" + erro)
                        res.end()
                    })
                }
                else if (/\/edit\/\d+/.test(req.url)){
                    console.log("AHHHHHHHHHH")
                    var id = req.url.substring(6)
                    axios.get("http://localhost:3000/tasks").then(response => {
                        var dataa = response.data 
                        for(i = 0; i < dataa.length; i++){
                            if (id == dataa[i]["id"]) var info = dataa[i]
                        }
                        res.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
                        res.write(paginas.paginaNormal(dataa, info))
                        res.end()
                    })
                }
                else if (/\/delete\/\d+/.test(req.url)){
                    var id = req.url.substring(8)
                    axios.delete("http://localhost:3000/tasks/" + id).then(response =>{
                        axios.get("http://localhost:3000/tasks").then(response => {
                                    var dataa = response.data
            
                                    res.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
                                    res.write(paginas.paginaNormal(dataa, undefined))
                                    res.end()
                                })
                    }).catch(function(erro){
                        res.writeHead(404,{"Content-Type": "text/html;charset=utf-8"})
                        res.write("<p>Nao foi possivel eliminar o resultado desejado... Erro:" + erro)
                        res.end()
                    })
                }
                break
            

            case "POST":
                if (req.url == "/"){
                    collectRequestBodyData(req,result => {
                        if(result){
                            axios.post("http://localhost:3000/tasks", result).then(resp => {
                                axios.get("http://localhost:3000/tasks").then(response => {
                                    var dataa = response.data
            
                                    res.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
                                    res.write(paginas.paginaNormal(dataa, undefined))
                                    res.end()
                                })
                            })
                            .catch(function(erro){
                                res.writeHead(500,{"Content-Type": "text/html;charset=utf-8"})
                                res.write("<p>Nao foi possivel inserir o resultado desejado... Erro:" + erro)
                                res.end()
                            })
                        }
                    })
                }
                else if (/\/edit\/\d+/.test(req.url)){
                    var id = req.url.substring(6)
                    
                    collectRequestBodyData(req,result => {
                        if(result){
                            console.log(id)
                            console.log(result)
                            axios.put("http://localhost:3000/tasks/" + id, result).then(resp => {
                                axios.get("http://localhost:3000/tasks").then(response => {
                                    var dataa = response.data
            
                                    res.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
                                    res.write(paginas.paginaNormal(dataa, undefined))
                                    res.end()
                                })
                            })
                            .catch(function(erro){
                                res.writeHead(500,{"Content-Type": "text/html;charset=utf-8"})
                                res.write("<p>Nao foi possivel atualizar o resultado desejado... Erro:" + erro)
                                res.end()
                            })
                        }
                    })
                }
                break
            default:
                res.writeHead(500,{"Content-Type": "text/html;charset=utf-8"})
                res.write("<p>Erro:" + erro)
                res.end()
                break
        }
    }

}).listen(7777)