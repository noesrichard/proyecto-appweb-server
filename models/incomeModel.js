const mongoose = require("mongoose");

const IncomeSchema = mongoose.Schema({
userid: { 
        type: String, 
        require: true,
    },
	type: {
		type: String,
		require: true,
	},
	description: {
		type: String,
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

module.exports = mongoose.model("income", IncomeSchema);
