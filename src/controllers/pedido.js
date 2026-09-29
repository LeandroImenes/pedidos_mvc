const pedidos = require("../../dados/pedidos.json")

function subtotais(){
    pedidos.forEach(p=>{
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1]) + 1 //auto increment
    pedidos.push(dados)
    res.status(201).json(dados)}
const listar = (req, res) => {
    subtotais()
    res.json(pedidos)
}
const alterar = (req, res) => {
    const id = Number(req.params.id)
    const dados = req.body
    const indice = pedidos.findIndex(pedido => Number(pedido.id) === id)
    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Pedido não encontrado"
        })
    }
    pedidos[indice] = {
        ...pedidos[indice],
        ...dados,
        id: pedidos[indice].id
    }
    pedidos[indice].subtotal =
        pedidos[indice].quantidade * pedidos[indice].preco

    res.json(pedidos[indice])
}

const excluir = (req, res) => {
    const id = Number(req.params.id)
    const indice = pedidos.findIndex(pedido => Number(pedido.id) === id)

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Pedido não encontrado"
        })
    }
    const pedidoExcluido = pedidos.splice(indice, 1)
    res.json({
        mensagem: "Pedido excluído com sucesso",
        pedido: pedidoExcluido[0]
    })
}

module.exports = {
    criar, listar, alterar, excluir
}