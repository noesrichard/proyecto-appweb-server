const Piso = require("../models/pisoModel");

exports.list = async (req, res) => {
	try {
		const agencies = await Piso.find();
		res.json(agencies);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.create = async (req, res) => {
	try {
		let piso;
		piso = new Piso(req.body);
        console.log(piso); 
		await piso.save();
		res.send(piso);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};

