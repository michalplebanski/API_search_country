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
					<div class="country-info">
						{this.state.country.map(item => (
							<div class="response">
								<h2 class="title-country">{item.name}</h2>
								<div class="title-info">
									Background Information:
								</div>
								<div class="info">
									<ul class="list-title">
										<li>Region</li>
										<li>Alt spelling</li>
										<li>Capital</li>
										<li>Land area</li>
										<li>Population</li>
										<li>Language(s)</li>
										<li>Currency</li>
									</ul>
									<ul class="list-value">
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
					</div>
				</section>
				<footer>
					<p>Michał Plebański</p>
				</footer>
			</main>
		);
	}
}

export default App;
