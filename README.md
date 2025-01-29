# Blockchain Explorer Crypto React Native App

https://github.com/KRSNA-BLR/BlockchainExplorerCryptoReactNativeApp/blob/main/assets/app.png

## Overview
Blockchain Explorer Crypto is a **React Native boilerplate** designed to track the top **20 cryptocurrencies** in real-time, leveraging the **CoinGecko API**. This project serves as a foundational template for developers looking to explore **React Native**, API integration, and real-time data fetching.

## Features
- **Live Cryptocurrency Data**: Fetches and displays real-time prices for the top **20 cryptocurrencies**.
- **Multi-Currency Support**: Converts prices into **USD, EUR, GBP, JPY, AUD**.
- **Automated Data Updates**: Refreshes every **30 seconds** using polling.
- **Optimized UI/UX**: Styled list items with dynamic branding and a header logo.
- **Well-Structured Code**: Organized React Native project with clean **folder hierarchy**.

## Tech Stack
- **React Native**: Cross-platform mobile app development.
- **Axios**: API request handling.
- **CoinGecko API**: Free cryptocurrency market data.
- **JavaScript/TypeScript**: Codebase compatibility.

## Project Structure
```
beginnerCriptoApp/
│── app/
│   ├── screens/       # App screens
│   ├── services/      # API calls and logic
│── assets/           # Images, icons, and branding
│── node_modules/     # Dependencies
│── android/         # Android native files
│── ios/             # iOS native files
│── .gitignore       # Ignored files
│── README.md        # Project documentation
│── package.json     # Dependencies & scripts
```

## Installation & Setup
### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (v14+ recommended)
- **React Native CLI**
- **Android Studio/Xcode** (For device testing)

### **Installation Steps**
1. **Clone the repository**:
   ```sh
   git clone https://github.com/KRSNA-BLR/BlockchainExplorerCryptoReactNativeApp.git
   cd BlockchainExplorerCryptoReactNativeApp
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Run the application**:
   ```sh
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```

## API Integration
The app communicates with **CoinGecko API** through the `cryptoApi.js` service:

```javascript
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
```

## Contribution Guidelines
We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License
This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

### 🚀 **Blockchain + React Native = The Future!**
