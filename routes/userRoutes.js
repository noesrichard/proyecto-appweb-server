const express = require('express')
const router = express.Router(); 

const userController = require('../controllers/userController');



router.post('/', userController.create);
//router.get('/', userController.list);
router.get('/:username/:password', userController.findByUsername);
//router.put('/:id', userController.update);
//router.delete('/:id', userController.delete);

module.exports = router
