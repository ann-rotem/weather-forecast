<div align="center">
<h1>⛅ Weather Forecast App</h1>
<p>A weather app built with React.js to provide and display current, hourly, and daily weather forecasts based on the user's current location or search term provided by the user</p>
<a href="https://ann-rotem.github.io/weather-forecast/" >View Demo</a>

<img src="https://github.com/ann-rotem/weather-forecast/blob/main/project-image.png?raw=true" alt="weather-forecast laptop and phone mockup"/>

<hr />
<p>
This project was bootstrapped with <a href='https://github.com/facebook/create-react-app' > Create React App</a>
</p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>

## 🧐 About

React weather forecast application that uses [OpenWeather API](https://openweathermap.org/api) to provide weather forecasts and [HERE Geocoding and search API](https://developer.here.com/documentation/geocoding-search-api/dev_guide/index.html) to provide geo-coordinates of a known location.

Built as a personal project for learning purposes.

### 💡 Features

-  Display current weather
-  Display 7 day weather forecast
-  Display 24 hour weather forecast
-  Supports dark and light mode
-  Responsive
-  Dynamic icons based on weather results

### 👩‍💻 Built with

-  react.js
-  axios
-  styled-components
-  chart.js + react-chartjs-2
-  Affinity Designer

## 🏁 Getting Started

To set up the project locally on your machine follow the instructions

### 📚 Prerequisite

-  [Node.js](https://nodejs.org/en/)
-  [npm](https://docs.npmjs.com/) or [Yarn](https://yarnpkg.com/)
-  API keys
   -  [OpenWeather API](http://openweathermap.org/appid)
   -  [HERE API](https://developer.here.com/documentation)

### 🧰 Installation

1. Get API keys from [OpenWeather API](http://openweathermap.org/appid) and [HERE API](https://developer.here.com/documentation)
2. Clone the repo

   ```sh
   git clone https://github.com/ann-rotem/weather-forecast.git
   ```

3. Install dependencies

   ```sh
   cd weather-forecast
   npm install # or yarn
   ```

4. Create an `.env` file in the root directory of the project

   ```sh
   touch .env
   ```

5. Enter your API keys in `.env`

   ```
   REACT_APP_OPEN_WEATHER_API_KEY = <YOUR_OPEN_WEATHER_API_KEY>
   REACT_APP_HERE_API_KEY = <YOUR_HERE_API_KEY>
   ```

6. Run it

   ```sh
   npm start # or yarn start
   ```

## 🗺️ Roadmap

-  [x] Loader component
-  [ ] Testing
-  [ ] Animation
-  [ ] Unit conversion (metric\ imperial)

## 💳 License

Distributed under the MIT License. See [`LICENSE`](LICENCE) for more information.

## 🧺 Resources

-  [Create React App Docs](https://create-react-app.dev/)
-  [axios Docs](https://axios-http.com/docs/intro)
-  [styled-components Docs](https://styled-components.com/)
-  [OpenWeather API Docs](https://openweathermap.org/api)
-  [HERE Geocoding and search API Docs](https://developer.here.com/documentation/geocoding-search-api/dev_guide/index.html)
-  [react-chartjs-2 Docs](http://reactchartjs.github.io/react-chartjs-2/#/)
