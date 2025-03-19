const express = require('express');
const router = express.Router();
const CoffeeShopController = require("../controllers/coffeeShopsController");

router.get('/', CoffeeShopController.getAll);
router.get('/:id', CoffeeShopController.getOne);
router.post('/', CoffeeShopController.create);
router.put('/:id', CoffeeShopController.update);
router.delete('/:id', CoffeeShopController.remove);

module.exports = router;