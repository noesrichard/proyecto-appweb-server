const Expense = require("../models/expenseModel");
const emitter = require('../shared/Event');

exports.create = async (req, res) => {
	try {
		let expense;
		expense = new Expense(req.body);
		await expense.save();
        emitter.emit('expenseCreated', expense);
		res.send(expense);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};


exports.list = async (req, res) => {
	try {
		const expenses = await Expense.find()
			.populate("account")
			.populate("category");
		res.json(expenses);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.findById = async (req, res) => {
	try {
		let expense = await Expense.findById(req.params.id);
		if (!expense) {
			res.status(500).send("No existe la agencia");
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.delete = async (req, res) => {
	try {
		let expense = await Expense.findById(req.params.id);
		if (!expense) {
			res.status(500).send("No existe la agencia");
		}
		await Expense.findOneAndDelete({ _id: req.params.id });
        emitter.emit('expenseDeleted', expense);
		res.json({ msg: "Agencia eliminada" });
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.update = async (req, res) => {
	try {
		const { type, description, category, date, account, total } = req.body;
		let expense = await Expense.findById(req.params.id);
		if (!expense) {
			res.status(500).send("No existe la agencia");
		}
		expense.type = type;
		expense.description = description;
		expense.category = category;
		expense.date = date;
		expense.account = account;
        let previousExpense = expense.total;
		expense.total = total;
		expense = await Expense.findOneAndUpdate(
			{ _id: req.params.id },
			expense,
			{
				new: true,
			}
		);
        emitter.emit("expenseModified", expense, previousExpense); 
		res.json(expense);
	} catch (error) {
		console.log(error);
	}
};


