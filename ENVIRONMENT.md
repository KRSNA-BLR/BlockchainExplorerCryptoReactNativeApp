<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1 align="center">🌍 Environment Variables</h1>

  <p align="center">
    <strong>Configuration settings for running the Blockchain Explorer Crypto project.</strong>  
    These variables must be set up correctly for the app to function properly.
  </p>

  <hr>

  <h2>📌 Required Variables</h2>
  <p>Create a <code>.env</code> file in the root directory and add the following:</p>

  <pre><code># API configuration
COINGECKO_API_KEY=your_api_key_here

# App Environment
NODE_ENV=development</code></pre>

  <ul>
    <li>🔑 <strong>COINGECKO_API_KEY</strong> - API key for fetching cryptocurrency data.</li>
    <li>⚙️ <strong>NODE_ENV</strong> - Defines the app environment (<code>development</code> or <code>production</code>).</li>
  </ul>

  <hr>

  <h2>⚠️ Important Notes</h2>
  <ul>
    <li>🔹 <strong>Never expose your API keys publicly.</strong> Use a <code>.env</code> file and add <code>.env</code> to <code>.gitignore</code>.</li>
    <li>🔹 Ensure all team members have the correct environment variables configured.</li>
    <li>🔹 For production environments, securely manage environment variables using services like <strong>dotenv</strong> or cloud providers.</li>
  </ul>

  <hr>

  <h2>📢 How to Use the .env File</h2>
  <p>In your code, access environment variables using:</p>
  <pre><code>require('dotenv').config();
const apiKey = process.env.COINGECKO_API_KEY;</code></pre>

  <hr>

  <h2>📬 Need Help?</h2>
  <p>If you have any questions, feel free to reach out via  
    <a href="https://www.linkedin.com/in/danilo-viteri-moreno/" target="_blank">LinkedIn</a>.
  </p>

  <hr>

  <h2>🎉 Thank You!</h2>
  <p>Setting up the correct environment ensures the smooth functioning of the project. Happy coding! 🚀</p>

</body>
</html>
