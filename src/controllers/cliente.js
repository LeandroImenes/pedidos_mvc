const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1 //auto increment
    clientes.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(clientes)
}
const alterar = (req, res) => {
    const id = Number(req.params.id)
    const dados = req.body
    const indice = clientes.findIndex(clientes => Number(clientes.id) === id)
    if (indice === -1){
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        })
    }
    cliente[indice] = {
        ...clientes[indice],
        ...dados,
        id: clientes[indice].id
    }
    res.json("Em construção")
}
const excluir = (req, res) => {
    const id = Number(req.params.id)
    const indice = clientes.findIndex(cliente => Number(cliente.id) === id)
    if(indice === -1){
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        })
    }
    const clienteExcluido = clientes.splice(indice, 1)
    res.json({
        mensagem: "Cliente excluído com sucesso",
        cliente: clienteExcluido[0]
    })
}

module.exports = {
    criar, listar, alterar, excluir
}