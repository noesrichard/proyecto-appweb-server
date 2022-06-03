const User = require("../models/userModel");

exports.create = async (req, res) => {
	try {
		let user;
		user = new User(req.body);
		await user.save();
		res.send(user);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};

exports.findById = async (req, res) => {
	try {
		let user = await User.findById(req.params.id);
		if (!user) {
			res.status(500).send("No existe la agencia");
		}
        res.send(user); 
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.findByUsername = async (req, res) => {
	try {
		console.log(req.params);
		let user = await User.findOne({
			username: req.params.username,
			password: req.params.password,
		});
        console.log(user); 
		if (!user) {
			res.status(500).send("No existe la agencia");
		}
        res.send(user); 
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.update = async (req, res) => {
	try {
		const { name, description } = req.body;
		let user = await User.findById(req.params.id);
		if (!user) {
			res.status(500).send("No existe la agencia");
		}
		user.name = name;
		user.description = description;

		user = await User.findOneAndUpdate({ _id: req.params.id }, user, {
			new: true,
		});
		res.json(user);
	} catch (error) {
		console.log(error);
	}
};

exports.updateUserExpense = async (userId, value) => {
	try {
		let user = await User.findById(userId);
		user.expense = value;
		user = await User.findOneAndUpdate({ _id: userId }, user, {
			new: true,
		});
	} catch (error) {
		console.log(error);
	}
};
