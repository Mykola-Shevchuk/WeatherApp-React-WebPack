var React = require('react');

require('./Weather.css');

var Weather = React.createClass({
    render: function() {
      
        return (
          <div className="city">
              <span className="delete-city" onClick={this.props.onDelete}> × </span>
              <p>{this.props.children}&deg;</p>
          </div>
        );
    }
});

module.exports = Weather;
