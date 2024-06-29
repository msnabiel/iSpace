import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SpaceWeather.css';

function SpaceWeather() {
  const [spaceWeather, setSpaceWeather] = useState([]);
  const apiKey = process.env.REACT_APP_NASA_API_KEY;

  useEffect(() => {
    axios.get(`https://api.nasa.gov/DONKI/notifications?startDate=2023-01-01&endDate=2023-12-31&type=all&api_key=9fVK0Pkapy4dYUiP8HBZ8OK5CBh9cpaWZMfZpixy`)
      .then(response => setSpaceWeather(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [apiKey]);

  return (
    <div className="content">
      <h1>🛰️ Space Weather Notifications</h1>
      {spaceWeather.length > 0 ? (
        <ul className="weather-list">
          {spaceWeather.map((event, index) => (
            <li key={index}>
              <h2>{event.messageType}</h2>
              <p>{event.messageBody}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading space weather data...</p>
      )}
    </div>
  );
}

export default SpaceWeather;
