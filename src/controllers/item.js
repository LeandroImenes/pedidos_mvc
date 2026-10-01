const itens = require("../../dados/itens.json")

function subtotais(){
    itens.forEach(p=>{
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(itens[itens.length - 1].id) + 1 //auto increment
    itens.push(dados)
    res.status(201).json(dados)}

const listar = (req, res) => {
    subtotais()
    res.json(itens)
}

const alterar = (req, res) => {
    const id = Number(req.params.id)
    const dados = req.body

    const indice = itens.findIndex(
        item => Number(item.id) === id
    )
    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }
    itens[indice].pedido_id = dados.pedido_id
    itens[indice].produto_id = dados.produto_id
    itens[indice].preco = dados.preco
    itens[indice].quantidade = dados.quantidade
    res.json(itens[indice])
}

const excluir = (req, res) => {
    const id = Number(req.params.id)
    const indice = itens.findIndex(item => Number(item.id) === id)

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }
    const itemExcluido = itens.splice(indice, 1)
    res.json({
        mensagem: "Item excluído com sucesso",
        item: itemExcluido[0]
    })
}

module.exports = {
    criar, listar, alterar, excluir
}