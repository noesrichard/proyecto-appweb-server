const Room = require("../models/roomModel");

exports.list = async (req, res) => {
	try {
		const agencies = await Room.find();
		res.json(agencies);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.create = async (req, res) => {
	try {
		let room;
		room = new Room(req.body);
        console.log(room); 
		await room.save();
		res.send(room);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};

