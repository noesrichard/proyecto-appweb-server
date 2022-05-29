const Income = require("../models/incomeModel");

exports.create = async (req, res) => {
	try {
		let income;
		income = new Income(req.body);
        console.log(income);
		await income.save();
		res.send(income);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};

exports.list = async (req, res) => {
	try {
		const agencies = await Income.find();
		res.json(agencies);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.findById = async (req, res) => {
	try {
		let income = await Income.findById(req.params.id);
		if (!income) {
			res.status(500).send("No existe la agencia");
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.delete = async (req, res) => {
	try {
		let income = await Income.findById(req.params.id);
		if (!income) {
			res.status(500).send("No existe la agencia");
		}
        await Income.findOneAndDelete({_id: req.params.id});
		res.json({ msg: "Agencia eliminada" });
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.update = async (req, res) => {
	try {
		const {type, description,  date, account, total} = req.body;
		let income = await Income.findById(req.params.id);
		if (!income) {
			res.status(500).send("No existe la agencia");
		}
        income.type  = type; 
        income.description = description;
        income.date = date; 
        income.account = account; 
        income.total = total 
		income = await Income.findOneAndUpdate(income, income, {
			new: true,
		});
		res.json(income);
	} catch (error) {
		console.log(error);
	}
};
