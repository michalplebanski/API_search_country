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
			<div>
				<form onSubmit={event => this.onSubmit(event)}>
					<label htmlFor="searchText">Search by user name</label>
					<input
						type="text"
						placeholder="enter the user name"
						id="searchText"
						onChange={event => this.onChangeHandle(event)}
						value={this.state.searchText}
					/>
				</form>
				<div>{JSON.stringify(this.state.country)}</div>
			</div>
		);
	}
}

export default App;
