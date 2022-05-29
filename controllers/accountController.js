const Account = require("../models/accountModel");

exports.create = async (req, res) => {
	try {
		let account;
		account = new Account(req.body);
		await account.save();
		res.send(account);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};

exports.list = async (req, res) => {
	try {
		const agencies = await Account.find();
		res.json(agencies);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.findById = async (req, res) => {
	try {
		let account = await Account.findById(req.params.id);
		if (!account) {
			res.status(500).send("No existe la agencia");
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.delete = async (req, res) => {
	try {
		let account = await Account.findById(req.params.id);
		if (!account) {
			res.status(500).send("No existe la agencia");
		}
        await Account.findOneAndDelete({_id: req.params.id});
		res.json({ msg: "Agencia eliminada" });
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.update = async (req, res) => {
	try {
		const { name, type, description } = req.body;
		let account = await Account.findById(req.params.id);
		if (!account) {
			res.status(500).send("No existe la agencia");
		}
        account.type  = type; 
		account.name = name;
        account.description = description

        account = await Account.findOneAndUpdate({ _id: req.params.id }, account, {
			new: true,
		});
		res.json(account);
	} catch (error) {
		console.log(error);
	}
};
