const {check} = require('express-validator');

let validateRegister = [
    check('name')
      .notEmpty().withMessage("Por favor, completar con su nombre"),
  
    check('color')
      .notEmpty().withMessage("Por favor, completar con el color elegido"),
  
    check('email')
      .notEmpty().withMessage("Por favor, completar con su email").bail()
      .isEmail().withMessage("Por favor, ingresar email valido"),
  
    check('edad')
      .notEmpty().withMessage("Por favor, completar con su edad").bail()
      .isInt().withMessage("Por favor, ingresar números")
  ]

  module.exports = validateRegister;