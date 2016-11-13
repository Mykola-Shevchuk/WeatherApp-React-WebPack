var React = require('react');
var WeatherEditor = require('./WeatherEditor.jsx');
var WeatherList = require('./WeatherList.jsx');

require('./WeatherApp.css');

var WeatherApp = React.createClass({
    getInitialState: function() {
        return {
            cities: []
        };
    },

    componentDidMount: function() {

      var form = document.querySelector('.city-editor');
      var but = document.querySelector('.add-button');

      form.addEventListener("keypress", function(event) {
          if (event.keyCode == 13) {
              but.click();
          }
      });

       
        var localCities = JSON.parse(localStorage.getItem('cities'));
        if (localCities) {
            this.setState({ cities: localCities });
        }
    },

    componentDidUpdate: function() {
        this._updateLocalStorage();
    },

    handleCityDelete: function(city) {
        var cityId = city.id;
        var newCities = this.state.cities.filter(function(city) {
            return city.id !== cityId;
        });
        this.setState({ cities: newCities });
    },

    handleCityAdd: function(newCity) {
        var newCities = this.state.cities.slice();
        newCities.unshift(newCity);
        this.setState({ cities: newCities });
    },

    render: function() {
        return (
            <div className="cities-app">
                <h2 className="app-header">Weather</h2>
                <WeatherEditor onCityAdd={this.handleCityAdd} />
                <WeatherList cities={this.state.cities} onCityDelete={this.handleCityDelete} />
            </div>
        );
    },

    _updateLocalStorage: function() {
        var cities = JSON.stringify(this.state.cities);
        localStorage.setItem('cities', cities);
    }
});

module.exports = WeatherApp;
