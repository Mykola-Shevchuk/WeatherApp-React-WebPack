var React = require('react');

require('./WeatherEditor.css');

var WeatherEditor = React.createClass({
  getInitialState: function() {
    return {
      temp: ''
    }
  },

  handleTextChange: function(event) {
    this.setState({temp: event.target.value});
  },

  handleCityAdd: function() {

    var self = this;
    var api = 'http://api.openweathermap.org/data/2.5/weather?q=' 
              + self.state.temp +'&=ru&units=metric&APPID=98c355d73f22c6eb33c4bc0bd22031fe'

     axios.get(api)
      .then(function (result) {

            self.setState({
              temp: Math.ceil(result.data.main.temp),
              city: result.data.name
            });

            var newCity = {
                temp: self.state.temp,
                city: self.state.city,
                id: Date.now()
            };

            self.props.onCityAdd(newCity);
            self.setState({ temp: '' });

      });
    
  },

   render: function() { 
       return (
          <div className="city-editor">
            
              <input 
                type="text"
                placeholder="Enter your city..." 
                className="input" 
                value={this.state.temp}
                onChange={this.handleTextChange}
              />

              <button className="add-button" onClick={this.handleCityAdd}>Add</button>
            
          </div>
       );
   }
    
});

module.exports = WeatherEditor;
