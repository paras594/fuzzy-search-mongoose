require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const Country = require("./models/country.schema.js");
const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./configs/db.config.js");

app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/test", (req, res) => {
	console.log(req.query);
	res.send("search");
});

app.get("/api/search", async (req, res) => {
	const { q } = req.query;

	if (q.trim().length === 0) {
		return;
	}

	try {
		const results = await Country.fuzzySearch(q);

		res.status(200).json({
			message: "Search results",
			results
		});
	} catch (err) {
		res.status(400).json({
			message: "Error",
			error: err
		});
	}
});

app.get("/", (req, res) => {
	res.render("index");
});

const port = 3000;
app.listen(port, () => console.log(`app started on port: ${port}`));
