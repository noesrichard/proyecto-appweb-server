const express = require('express')
const router = express.Router(); 

const roomController = require('../controllers/roomController');



router.post('/', roomController.create);
router.get('/', roomController.list);

module.exports = router
