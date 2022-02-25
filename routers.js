const router = require('express').Router();
const service = require('./service');


router.get('/produto', async (req, res) => {
    const data = await service.findAllProdutos();
    return res.json(data)
});

router.get('/vendedor', async (req, res) => {
    const data = await service.findAllVendedores();
    return res.json(data)
});

module.exports = router;