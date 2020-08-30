window.onload = function() {
	const form = document.querySelector("form");
	const searchInput = document.querySelector("#searchInput");
	const searchBtn = document.querySelector("#searchBtn");
	const countriesAccordian = document.querySelector("#countriesAccordian");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		countriesAccordian.innerHTML = "";
		const searchQuery = searchInput.value;
		axios.get(`/api/search?q=${searchQuery}`).then((res) => {
			let countries = res.data.results;
			console.log(countries);
			countries.forEach((country, i) => {
				renderCard(country, i);
			});
		});
	});

	function renderCard(country, i) {
		const card = `
			<div class="card">
				<div class="card-header bg-transparent" id="label${i}">
					<h2 class="mb-0">
						<button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#name${i}" aria-expanded="false" aria-controls="name${i}">
					   	${country.name}
						</button>
					</h2>
				</div>

				<div id="name${i}" class="collapse" aria-labelledby="label${i}" data-parent="#countriesAccordian">
					<div class="card-body">
					  <div class="d-flex py-1">
					  		<p class="m-0 font-weight-bold" style="width: 6.2rem">Name:</p>
					  		<p class="m-0">${country.name}</p>
					  </div>
					  <div class="d-flex py-1">
					  		<p class="m-0 font-weight-bold" style="width: 6.2rem">Capital:</p>
					  		<p class="m-0">${country.capital}</p>
					  </div>
					  <div class="d-flex py-1">
					  		<p class="m-0 font-weight-bold" style="width: 6.2rem">Region:</p>
					  		<p class="m-0">${country.region}</p>
					  </div>
					  <div class="d-flex py-1">
					  		<p class="m-0 font-weight-bold" style="width: 6.2rem">Subregion:</p>
					  		<p class="m-0">${country.subRegion}</p>
					  </div>
					  <div class="d-flex py-1">
					  		<p class="m-0 font-weight-bold" style="width: 6.2rem">Population:</p>
					  		<p class="m-0">${country.population ? country.population : ""}</p>
					  </div>
					  <div class="d-flex py-1">
					  		<p class="m-0 font-weight-bold" style="width: 6.2rem">Languages:</p>
					  		<p class="m-0">${country.languages.slice(0, 3).join(", ")}</p>
					  </div>
					  <div class="d-flex py-1">
					  		<p class="m-0 font-weight-bold" style="width: 6.2rem">Area:</p>
					  		<p class="m-0">${country.area} km²</p>
					  </div>
					  <div class="d-flex py-1 align-items-center">
					  		<p class="m-0 font-weight-bold" style="width: 6.2rem">Flag:</p>
					  		<img src="${country.flag}" height="20">
					  </div>
					</div>
				</div>
		  </div>
		`;

		countriesAccordian.innerHTML += card;
	}
};
