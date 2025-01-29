<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1 align="center">🛠️ Tech Stack</h1>

  <p align="center">
    <strong>Overview of the technologies used in Blockchain Explorer Crypto.</strong>  
    This guide provides details on the frameworks, libraries, and tools powering the project.
  </p>

  <hr>

  <h2>📌 Core Technologies</h2>
  <ul>
    <li>⚛️ <strong>React Native</strong> - Cross-platform mobile development.</li>
    <li>📡 <strong>CoinGecko API</strong> - Real-time cryptocurrency data.</li>
    <li>🔄 <strong>Axios</strong> - HTTP client for API requests.</li>
    <li>🎨 <strong>Styled Components</strong> - Custom UI styling.</li>
    <li>📦 <strong>NPM/Yarn</strong> - Dependency management.</li>
  </ul>

  <hr>

  <h2>📱 Mobile Framework</h2>
  <h3>⚛️ React Native</h3>
  <p>The app is built using <strong>React Native</strong> to ensure seamless cross-platform functionality.</p>
  <pre><code>npx react-native init BlockchainExplorerCrypto</code></pre>

  <hr>

  <h2>🌍 API Integration</h2>
  <h3>📡 CoinGecko API</h3>
  <p>We use <strong>CoinGecko API</strong> to fetch real-time cryptocurrency market data.</p>
  <pre><code>const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';</code></pre>

  <hr>

  <h2>🔗 Networking & HTTP Requests</h2>
  <h3>🔄 Axios</h3>
  <p>Axios is used for making efficient API requests.</p>
  <pre><code>import axios from 'axios';

const fetchCryptoData = async () => {
    const response = await axios.get(API_URL, { params: { vs_currency: 'usd' } });
    return response.data;
};</code></pre>

  <hr>

  <h2>🎨 UI & Styling</h2>
  <h3>🎨 Styled Components</h3>
  <p>We use <strong>Styled Components</strong> to manage component-based styling.</p>
  <pre><code>import styled from 'styled-components/native';

const CryptoCard = styled.View`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`;</code></pre>

  <hr>

  <h2>⚙️ Dependency Management</h2>
  <h3>📦 NPM / Yarn</h3>
  <p>We use <strong>NPM</strong> to install and manage dependencies.</p>
  <pre><code>npm install axios styled-components</code></pre>

  <hr>

  <h2>📡 State Management</h2>
  <p>Currently, the project uses React’s built-in <code>useState</code> and <code>useEffect</code> hooks.</p>
  <p>Future versions may integrate <strong>Redux</strong> or <strong>Zustand</strong> for advanced state management.</p>

  <hr>

  <h2>📬 Need Help?</h2>
  <p>If you have any questions, feel free to reach out via  
    <a href="https://www.linkedin.com/in/danilo-viteri-moreno/" target="_blank">LinkedIn</a>.
  </p>

  <hr>

  <h2>🎉 Thank You!</h2>
  <p>Understanding the tech stack helps in making meaningful contributions.  
     Let’s build an amazing crypto tracking app together! 🚀</p>

</body>
</html>
