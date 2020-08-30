const mongoose = require("mongoose");
const mongooseFuzzySearching = require("mongoose-fuzzy-searching");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
	name: { type: String, required: true },
	capital: String,
	region: String,
	subRegion: String,
	population: Number,
	languages: [String],
	area: Number,
	flag: String
});

CountrySchema.plugin(mongooseFuzzySearching, { fields: ["name"] });

const Country = mongoose.model("Country", CountrySchema);
module.exports = Country;
