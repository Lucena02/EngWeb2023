var axios = require('axios')

// Student list
module.exports.list = () => {
    return axios.get('http://localhost:3000/tasks')
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getAlunoList = id => {
    return axios.get('http://localhost:3000/tasks')
            .then(resposta => {
                dataa = resposta.data
                for(i = 0; i < dataa.length; i++){
                    if (id == dataa[i]["id"]) {var info = dataa[i]; break;}
                }
                return [dataa, info]
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addTask = task => {
    return axios.post("http://localhost:3000/tasks/", task)
        .then(resposta => {
            return resposta.data
        })
        .catch(error => {
            return error
        })
}


module.exports.removeTask = id => {
    return axios.delete("http://localhost:3000/tasks/" + id)
        .then(resposta => {
            return resposta.data 
        })
        .catch(error => {
            return error
        })
}

module.exports.updateTask = (task, taskID) => {
    return axios.put("http://localhost:3000/tasks/" + taskID, task)
        .then(resposta =>{
            return resposta.data 
        })
        .catch(error => {
            return error
        })
}