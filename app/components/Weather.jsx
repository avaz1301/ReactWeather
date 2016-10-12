var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(location) {
        var that = this;
        // debugger;
        this.setState({isLoading: true});
        // this.setState({location: location, temp: 23});
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({ isLoading: false, location: location, temp: temp});
        }, function(errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        })
    },
    render: function() {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Loading weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;
