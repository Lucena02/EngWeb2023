var emd = require("../models/emd") 
 

module.exports.list = () => {
    return emd
            .find({}, {nome: 1, dataEMD: 1, resultado: 1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getEMD = id => {
    return emd.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.getModalidades = () => {
    return emd.distinct("modalidade")
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getEmdTrue = () => {
    return emd
        .find({resultado: true})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getModalidadesX = value => {
    return emd.find({modalidade: value})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getGenero = value => {
    return emd.find({género : value})
        .sort({nome: 1})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}


module.exports.getClube = value => {
    return emd.find({clube : value})
        .sort({nome: 1})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}


module.exports.listInter = () => {
    return emd
            .find({}, {nome: 1, dataEMD: 1, género: 1, idade: 1, resultado: 1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}