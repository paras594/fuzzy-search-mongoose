require("./configs/db.config.js");
const axios = require("axios");
const Country = require("./models/country.schema.js");

function generateDbData() {
	axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
		let rawData = res.data;
		let countries = rawData.map((country) => {
			let languages = country.languages.map((lang) => lang.name);
			return {
				name: country.name,
				capital: country.capital,
				region: country.region,
				subRegion: country.subregion,
				population: country.population,
				languages,
				area: country.area,
				flag: country.flag
			};
		});

		Country.insertMany(countries).then((result) => {
			console.log(result.length);
		});
	});
}

generateDbData();
