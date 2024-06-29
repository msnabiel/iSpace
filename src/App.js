import React, { useEffect, useState } from 'react';
import './App.css';
import './styles.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=9fVK0Pkapy4dYUiP8HBZ8OK5CBh9cpaWZMfZpixy`)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      {data ? (
        <div className="content">
          <h1>🌌 {data.title}</h1>
          <img src={data.url} alt={data.title} />
          <p>{data.explanation}</p>
          <footer>
            <p>🛰️ Data provided by NASA's APOD API</p>
            <p>✨ Designed by Syed Nabiel Hasaan M.</p>
          </footer>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
