const Category = require("../models/categoryModel");
exports.list = async (req, res) => {
	try {
		const agencies = await Category.find();
		res.json(agencies);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.findById = async (req, res) => {
	try {
		let category = await Category.findById(req.params.id);
		if (!category) {
			res.status(500).send("No existe la agencia");
		}
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
		res.send(category);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
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
