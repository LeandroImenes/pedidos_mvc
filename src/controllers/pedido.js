const pedidos = require("../../dados/pedidos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1 //auto increment
    pedidos.push(dados)
    res.status(201).json(dados)}

const listar = (req, res) => {
    subtotais()
    res.json(pedidos)
}

const alterar = (req, res) => {
    const id = Number(req.params.id)
    const dados = req.body

    const indice = pedidos.findIndex(
        pedido => Number(pedido.id) === id
    )
    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Pedido não encontrado"
        })
    }
    pedidos[indice].cliente_id = dados.cliente_id
    pedidos[indice].produto = dados.produto
    pedidos[indice].quantidade = dados.quantidade
    pedidos[indice].preco = dados.preco
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