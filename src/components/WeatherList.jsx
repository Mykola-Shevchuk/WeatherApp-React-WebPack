var React = require('react');
var Weather = require('./Weather.jsx');

require('./WeatherList.css');

var WeatherList = React.createClass({

    render: function() {
        var onCityDelete = this.props.onCityDelete;

        return (
            <div>
                <p className="error">Error: Your value is not correct!</p>
                
                <div className="cities-list">
                    {
                        this.props.cities.map(function(city){
                            return (
                                <Weather
                                    key={city.id}
                                    onDelete={onCityDelete.bind(null, city)}
                                    >
                                    {city.city}: {city.temp}
                                </Weather>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
});

module.exports = WeatherList;
