import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Optional: Include global CSS if needed

// Get the root element from the DOM
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Make sure you have a <div id='root'></div> in your index.html file.");
}

// Create the React root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
  <App />
</React.StrictMode>
);