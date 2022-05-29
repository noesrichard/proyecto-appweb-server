const Expense = require("../models/expenseModel");
const Account = require("../models/accountModel");
const Category = require("../models/categoryModel");

exports.create = async (req, res) => {
	try {
		let expense;
		expense = new Expense(req.body);

		await expense.save();

		//let account = await Account.findById(expense.account);
        updateCategory(expense, expense.total);

		res.send(expense);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};

const updateCategory = async (expense, total) => {
	try {
		let category = await Category.findById(expense.category);
		category.expense += total;
		category = await Category.findOneAndUpdate(
			{ _id: expense.category },
			category,
			{
				new: true,
			}
		);
	} catch (error) {
		console.log(error);
	}
};

exports.list = async (req, res) => {
	try {
		const agencies = await Expense.find()
			.populate("account")
			.populate("category");
		res.json(agencies);
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
		console.log(expense);
		if (!expense) {
			res.status(500).send("No existe la agencia");
		}
		expense.type = type;
		expense.description = description;
		expense.category = category;
		expense.date = date;
		expense.account = account;
        value = totalDiff(expense.total, total);
        updateCategory(expense, value)
		expense.total = total;
		expense = await Expense.findOneAndUpdate(
			{ _id: req.params.id },
			expense,
			{
				new: true,
			}
		);

		res.json(expense);
	} catch (error) {
		console.log(error);
	}
};

const totalDiff = (previous, actual) => { 
    let diff = previous-actual;
    return diff *= -1; 
}
