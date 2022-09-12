
const {validationResult} = require('express-validator');

module.exports ={
	register: (req,res) => {
		return res.render('register',{ title : "Register"})
	},
    processRegister: (req, res) => {
		const errors = validationResult(req);
		if (errors.isEmpty()){

		const {name, color, email, edad, guardarColor} = req.body;

		 req.session.usuario = {
			name: name,
			color: color,
			email: email,
			edad: edad,
		 }
		 if (req.body.guardarColor) {
			res.cookie('recordar', req.session.usuario, { maxAge: 5000 * 60 * 10 })
		 }
		/*  res.cookie('guardarColor',guardarColor);  */
		
		return res.redirect('bienvenida',{
			usuario : req.session.usuario
		})
	} else {
		return res.render('register',{
			title : "Register",
			errors: errors.errors,
			old : req.body
		})}
	},
	bienvenida: (req,res) => {
		if(req.session.usuario){
			return res.render('bienvenida',{
				 title : "Bienvenida/o:",
				usuario : req.session.usuario})
			}else{
				return res.render('register',{ title : "Register"})
			}
	},
}