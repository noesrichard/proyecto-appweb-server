const Income = require("../models/incomeModel");
const emitter = require("../shared/Event");

exports.create = async (req, res) => {
	try {
		let income;
		income = new Income(req.body);
		await income.save();
		emitter.emit("incomeCreated", income);
		res.send(income);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};

exports.list = async (req, res) => {
	try {
		const agencies = await Income.find().populate("account");
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
		await Income.findOneAndDelete({ _id: req.params.id });
		emitter.emit("incomeDeleted", income);
		res.json({ msg: "Agencia eliminada" });
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.update = async (req, res) => {
	try {
		const { type, description, date, account, total } = req.body;
		let income = await Income.findById(req.params.id);
		if (!income) {
			res.status(500).send("No existe la agencia");
		}
		income.type = type;
		income.description = description;
		income.date = date;
		income.account = account;
		income.total = total;
		income = await Income.findOneAndUpdate({ _id: req.params.id }, income, {
			new: true,
		});
        emitter.emit("incomeModified", income); 
		res.json(income);
	} catch (error) {
		console.log(error);
	}
};
