const express = require('express')
const router = express.Router(); 

const accountController = require('../controllers/accountController');



router.post('/', accountController.create);
router.get('/', accountController.list);
router.get('/:id', accountController.findById);
router.put('/:id', accountController.update);
router.delete('/:id', accountController.delete);

module.exports = router
