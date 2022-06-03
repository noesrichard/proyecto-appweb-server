const Wish = require("../models/wishModel");
const emitter = require('../shared/Event');

exports.create = async (req, res) => {
	try {
		let wish;
		wish = new Wish(req.body);
		await wish.save();
		res.send(wish);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};


exports.list = async (req, res) => {
	try {
		const wishs = await Wish.find()
			.populate("category");
		res.json(wishs);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.findById = async (req, res) => {
	try {
		let wish = await Wish.findById(req.params.id);
		if (!wish) {
			res.status(500).send("No existe la agencia");
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.delete = async (req, res) => {
	try {
		let wish = await Wish.findById(req.params.id);
		if (!wish) {
			res.status(500).send("No existe la agencia");
		}
		await Wish.findOneAndDelete({ _id: req.params.id });
		res.json({ msg: "Agencia eliminada" });
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.update = async (req, res) => {
	try {
		const { type, description, category, date, account, total, dateString } = req.body;
		let wish = await Wish.findById(req.params.id);
		if (!wish) {
			res.status(500).send("No existe la agencia");
		}
		wish.type = type;
		wish.description = description;
		wish.category = category;
		wish.date = date;
        wish.dateString = dateString; 
		wish.account = account;
        let previousWish = wish.total;
		wish.total = total;
		wish = await Wish.findOneAndUpdate(
			{ _id: req.params.id },
			wish,
			{
				new: true,
			}
		);
		res.json(wish);
	} catch (error) {
		console.log(error);
	}
};


