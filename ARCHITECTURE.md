<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1 align="center">🏗️ Project Architecture</h1>

  <p align="center">
    <strong>Understanding the structure of Blockchain Explorer Crypto.</strong>  
    This guide explains how the project is organized and how its core components interact.
  </p>

  <hr>

  <h2>📌 Overview</h2>
  <p>Blockchain Explorer Crypto is built using <strong>React Native</strong> and follows a modular, scalable architecture.  
     It is structured to maintain separation of concerns and facilitate future development.</p>

  <hr>

  <h2>📂 Folder Structure</h2>
  <p>The project follows a clean and organized directory structure:</p>

  <pre><code>
beginnerCriptoApp/
├── app/
│   ├── screens/       # Contains React Native screens (HomeScreen, DetailsScreen)
│   ├── services/      # API calls, external data fetching (cryptoApi.js)
│   ├── components/    # Reusable UI components (CryptoCard, Header)
├── assets/           # Images, icons, and branding resources
├── android/         # Native Android files
├── ios/             # Native iOS files
├── node_modules/    # Dependencies installed via npm
├── .gitignore       # Specifies files to ignore in version control
├── README.md        # Main project documentation
├── package.json     # Dependencies and project metadata
  </code></pre>

  <hr>

  <h2>🔹 Key Components</h2>

  <h3>1️⃣ Screens</h3>
  <p>Responsible for rendering different sections of the app.</p>
  <ul>
    <li>📄 <strong>HomeScreen.js</strong> - Displays the top 20 cryptocurrencies with real-time data.</li>
    <li>📄 <strong>DetailsScreen.js</strong> - Shows detailed information about a selected cryptocurrency.</li>
  </ul>

  <h3>2️⃣ Services</h3>
  <p>Handles external API requests and data fetching.</p>
  <pre><code>
// cryptoApi.js
import axios from 'axios';
const API_URL = 'https://api.coingecko.com/api/v3';

export const getTopCryptos = async () => {
    try {
        const response = await axios.get(`${API_URL}/coins/markets`, {
            params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 20, page: 1 }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        return [];
    }
};
  </code></pre>

  <h3>3️⃣ Components</h3>
  <p>Reusable UI elements for modularity and efficiency.</p>
  <ul>
    <li>💳 <strong>CryptoCard.js</strong> - Displays cryptocurrency details in a card layout.</li>
    <li>🖼️ <strong>Header.js</strong> - Custom header component for navigation.</li>
  </ul>

  <hr>

  <h2>📡 API Integration</h2>
  <p>We use <strong>CoinGecko API</strong> to fetch real-time cryptocurrency data.</p>
  <ul>
    <li>✔️ Fetch top 20 cryptocurrencies by market cap.</li>
    <li>✔️ Get multi-currency price conversions.</li>
    <li>✔️ Poll API every 30 seconds for live updates.</li>
  </ul>

  <hr>

  <h2>🛠 State Management</h2>
  <p>The project currently uses React's built-in state management (<c
