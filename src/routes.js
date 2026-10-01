const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedido = require("./controllers/pedido")
const Produto = require("./controllers/produto")
const Item = require("./controllers/item")

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

router.get('/',rotaInicial)

router.post('/clientes',Cliente.criar)
router.get('/clientes',Cliente.listar)
router.put('/clientes/:id',Cliente.alterar)
router.delete('/clientes/:id',Cliente.excluir)

router.post('/pedidos',Pedido.criar)
router.get('/pedidos',Pedido.listar)
router.put('/pedidos/:id',Pedido.alterar)
router.delete('/pedidos/:id',Pedido.excluir)

router.post('/produtos',Produto.criar)
router.get('/produtos',Produto.listar)
router.put('/produtos/:id',Produto.alterar)
router.delete('/produtos/:id',Produto.excluir)

router.post('/itens',Item.criar)
router.get('/itens',Item.listar)
router.put('/itens/:id',Item.alterar)
router.delete('/itens/:id',Item.excluir)

module.exports = router