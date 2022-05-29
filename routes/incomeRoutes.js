const express = require('express')
const router = express.Router(); 

const incomeController = require('../controllers/incomeController');



router.post('/', incomeController.create);
router.get('/', incomeController.list);
router.get('/:id', incomeController.findById);
router.put('/:id', incomeController.update);
router.delete('/:id', incomeController.delete);

module.exports = router
