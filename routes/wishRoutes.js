const express = require('express')
const router = express.Router(); 

const wishController = require('../controllers/wishController');



router.post('/', wishController.create);
router.get('/:userid', wishController.list);
router.get('/:id', wishController.findById);
router.put('/:id', wishController.update);
router.delete('/:id', wishController.delete);

module.exports = router
