import React from 'react';

class App extends React.Component {
  constructor() {
		super();
		this.state = {
			country: []
		};
	}
  componentDidMount() {
    $.get('https://restcountries.eu/rest/v1/').success(function(response) {
      this.setState({ country: response })
    }.bind(this));
  }
  render() {
    return <div>{JSON.stringify(this.state.country)}</div>
  }
};

export default App;