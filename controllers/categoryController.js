const Category = require("../models/categoryModel");
const emitter = require("../shared/Event");

exports.list = async (req, res) => {
	try {
		const agencies = await Category.find();
		res.json(agencies);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.create = async (req, res) => {
	try {
		let category;
		category = new Category(req.body);
		await category.save();
		emitter.emit("expenseCreated", expense);
		res.send(category);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};

exports.findById = async (req, res) => {
	try {
		let category = await Category.findById(req.params.id);
		if (!category) {
			res.status(500).send("No existe la agencia");
		}
        return category; 
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.delete = async (req, res) => {
	try {
		let category = await Category.findById(req.params.id);
		if (!category) {
			res.status(500).send("No existe la agencia");
		}
		await Category.findOneAndDelete({ _id: req.params.id });
		res.json({ msg: "Agencia eliminada" });
		emitter.emit("expenseDeleted", expense);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.update = async (req, res) => {
	try {
		const { name, description } = req.body;
		let category = await Category.findById(req.params.id);
		if (!category) {
			res.status(500).send("No existe la agencia");
		}
		category.name = name;
		category.description = description;

		category = await Category.findOneAndUpdate(
			{ _id: req.params.id },
			category,
			{
				new: true,
			}
		);
		res.json(category);
	} catch (error) {
		console.log(error);
	}
};

exports.updateCategoryExpense = async (categoryId, value) => {
	try {
		let category = await Category.findById(categoryId);
		category.expense = value;
		category = await Category.findOneAndUpdate(
			{ _id: categoryId },
			category,
			{
				new: true,
			}
		);
	} catch (error) {
		console.log(error);
	}
};
