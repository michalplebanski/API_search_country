import React from "react";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: "",
			country: []
		};
	}
	onChangeHandle(event) {
		this.setState({ searchText: event.target.value });
	}
	onSubmit(event) {
		event.preventDefault();
		const { searchText } = this.state;
		$.get(`https://restcountries.eu/rest/v1/name/${searchText}`).success(
			function(response) {
				this.setState({ country: response });
			}.bind(this)
		);
	}

	render() {
		return (
			<main>
				<section class="search">
					<form onSubmit={event => this.onSubmit(event)}>
						<h2>Country search engine</h2>
						<input
							id="country-name"
							placeholder="e.g. Poland"
							type="text"
							onChange={event => this.onChangeHandle(event)}
							value={this.state.searchText}
						/>
					</form>
				</section>
				<section class="results">
						{this.state.country.map(item => (
							<div class="results__response">
								<h2 class="results__response--title-country">{item.name}</h2>
								<div class="results__response--title-info">
									Backgrund Information:
								</div>
								<div class="results__info">
									<ul class="results__info--list-title">
										<li>Region</li>
										<li>Alt spelling</li>
										<li>Capital</li>
										<li>Land area</li>
										<li>Population</li>
										<li>Language(s)</li>
										<li>Currency</li>
									</ul>
									<ul class="results__info--list-value">
										<li>{item.region}</li>
										<li>{item.altSpellings[1]}</li>
										<li>{item.capital}</li>
										<li>{item.area}km</li>
										<li>{item.population}</li>
										<li>{item.languages}</li>
										<li>{item.currencies}</li>
									</ul>
								</div>
							</div>
						))}
				</section>
				<footer>
					<p>Michał Plebański</p>
				</footer>
			</main>
		);
	}
}

export default App;
