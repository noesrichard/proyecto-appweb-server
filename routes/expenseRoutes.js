const express = require('express')
const router = express.Router(); 

const expenseController = require('../controllers/expenseController');



router.post('/', expenseController.create);
router.get('/:userid', expenseController.list);
router.get('/:id', expenseController.findById);
router.put('/:id', expenseController.update);
router.delete('/:id', expenseController.delete);

module.exports = router
