var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This a weather application built on React.</p>
      <p>Here are a few links to show the tech that made this possible:</p>
      <ul>
        <li>
            <p><a href="https://facebook.github.io/react/">ReactJS</a>
              - JavaScript framework used for this app.</p>
        </li>
        <li>
            <p><a href="http://openweathermap.org">Open Weather Map</a>
              - I used Open Weather Map to search for weather data by city name.</p>
        </li>
        <li>
            <a href="http://foundation.zurb.com/">Foundation</a>
        </li>
        <li>
            <a href="https://www.heroku.com/">Heroku</a>
        </li>
        <li>
            <p>Check out the GitHub Repo <a href="https://github.com/avaz1301/ReactWeather">here.</a></p>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
