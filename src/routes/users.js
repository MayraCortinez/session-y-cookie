var express = require('express');
const userController = require('../controllers/userController');
const validateRegister = require('../validations/validateRegister');
let cookies = require('../middlewares/cookies')
var router = express.Router();

/* GET users listing. */
router.get('/register', userController.register) 
router.post('/register', validateRegister, userController.processRegister) 
router.get('/bienvenida', cookies, userController.bienvenida) 

module.exports = router;
