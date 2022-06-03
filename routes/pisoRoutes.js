const express = require('express')
const router = express.Router(); 

const pisoController = require('../controllers/pisoController');



router.post('/', pisoController.create);
router.get('/', pisoController.list);

module.exports = router
