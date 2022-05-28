const Agency = require("../models/agencyModels");

exports.addAgency = async (req, res) => {
	try {
		let agency;
		agency = new Agency(req.body);
		await agency.save();
		res.send(agency);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};

exports.loadAgencies = async (req, res) => {
	try {
		const agencies = await Agency.find();
		res.json(agencies);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.loadAgency = async (req, res) => {
	try {
		let agency = await Agency.findById(req.params.id);
		if (!agency) {
			res.status(500).send("No existe la agencia");
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.deleteAgency = async (req, res) => {
	try {
		let agency = await Agency.findById(req.params.id);
		if (!agency) {
			res.status(500).send("No existe la agencia");
		}
		await Agency.findOneAndDelete({ _id: req.parms.id });
		res.json({ msg: "Agencia eliminada" });
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.updateAgency = async (req, res) => {
	try {
		const { name, address } = req.body;
		let agency = await Agency.findById(req.params.id);
		if (!agency) {
			res.status(500).send("No existe la agencia");
		}
		agency.name = name;
		agency.address = address;

		agency = await Agency.findOneAndUpdate({ _id: req.params.id }, agency, {
			new: true,
		});
		res.json(agency);
	} catch (error) {
		console.log(error);
	}
};
