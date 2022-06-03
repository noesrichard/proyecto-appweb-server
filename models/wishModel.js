const mongoose = require("mongoose");

const WishSchema = mongoose.Schema({
userid: { 
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
	total: {
		type: Number,
		require: true,
	},
});

module.exports = mongoose.model("wish", WishSchema);
