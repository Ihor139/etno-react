const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
	token: {
		type: String,
		unique: true,
		required: true
	},
	products: [{
		size: String,
		amount: Number,
		product: {
			type: mongoose.Schema.ObjectId,
			ref: 'Product',
		},

		sizes: Array,
	}
	],
	/**
	 * add expired time
	 */
}, {collection: 'guests'});


export default mongoose.model("Guest", GuestSchema);
