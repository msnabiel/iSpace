# iSpace

This project aims to create a sleek, minimalistic, Apple-themed website using HTML5, CSS, and ReactJS, leveraging NASA's APIs for astronomical data and more. The design focuses on simplicity and elegance, incorporating Apple emojis and design principles.

## Project under Construction 😄


## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Enhancements](#enhancements)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Overview
This website showcases information from NASA's APIs, including the Astronomy Picture of the Day (APOD), Mars Rover Photos, and weather updates from space. The design philosophy is inspired by Apple’s aesthetics, focusing on a clean and intuitive user experience.

## Features
- **Astronomy Picture of the Day (APOD)**: Displays NASA's daily featured image or video.
- **Mars Rover Photos**: Browse recent photos taken by NASA’s Mars rovers.
- **Weather Updates**: Provide space-related weather updates.
- **Settings**: A settings icon for user preferences.
- **Responsive Design**: Ensures the website looks great on all devices.
- **Minimalistic Theme**: Inspired by Apple’s design principles with a focus on simplicity and usability.

![APOD Example](./assets/images/apod-example.png)
*An example of the Astronomy Picture of the Day section.*

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
- **Node.js and npm**: Ensure you have Node.js and npm installed.
- **NASA API Key**: Register at [NASA's API portal](https://api.nasa.gov/) and get your API key.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nasa-themed-website.git
   cd nasa-themed-website
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your NASA API key:
   ```bash
   REACT_APP_NASA_API_KEY=your_nasa_api_key
   ```

## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the website.

## Enhancements
1. **Weather Management for Space**: Add a feature to display weather updates for planets and moons with data from NASA.
2. **Settings Icon**: Add a settings icon in the top right corner that allows users to change preferences like themes and units (metric/imperial).
3. **Animations and Transitions**: Use CSS animations to enhance user interactions and provide a smoother user experience.
4. **Error Handling**: Improve error handling for API calls to display user-friendly messages in case of issues.

### Example of Settings Icon
```html
<div class="settings-icon">
  <img src="./assets/images/settings.png" alt="Settings">
</div>
```

## Troubleshooting
- **Images Not Displaying**: Ensure your NASA API key is valid and correctly set up in the `.env` file. Also, check for network issues or API rate limits.
- **Responsive Issues**: Verify the CSS media queries to ensure the design adapts properly to various screen sizes.

## Contributors
- **Syed Nabiel Hasaan M.** - [GitHub](https://github.com/msnabiel)
- Email: [msyednabiel@gmail.com](mailto:msyednabiel@gmail.com)

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
