const mongoose = require("mongoose");

const ExpenseSchema = mongoose.Schema({
	type: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "category",
		require: true,
	},
	date: {
		type: Date,
		require: true,
	},

	dateString: {
		type: String,
		require: true,
	},
	account: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "account",
		require: true,
	},
	total: {
		type: Number,
		require: true,
	},
});

module.exports = mongoose.model("expense", ExpenseSchema);
