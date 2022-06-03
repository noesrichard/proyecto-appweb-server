const Booking = require("../models/bookingModel");

exports.list = async (req, res) => {
	try {
		const agencies = await Booking.find().populate("piso");
        console.log(agencies); 
		res.json(agencies);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al cargar el registro");
	}
};

exports.create = async (req, res) => {
	try {
		let booking;
		booking = new Booking(req.body);
        console.log(booking); 
		await booking.save();
		res.send(booking);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al insertar el registro");
	}
};

