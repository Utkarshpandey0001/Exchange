import React from "react";
import { useState } from "react";
import { MoonPayProvider } from "@moonpay/moonpay-react";
import { MoonPayBuyWidget } from "@moonpay/moonpay-react";
import "./styles.css";

function App() {
  const [exchange, setexchange] = useState(false);

  function handleSwapClick() {
    setexchange((e) => !e);
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <MoonPayProvider apiKey="pk_test_MzUppQWRM62VXustyTIbvuJ5j1rJYLb" debug>
        {exchange ? (
          <MoonPayBuyWidget
            variant="overlay"
            baseCurrencyCode="usd"
            baseCurrencyAmount="100"
            defaultCurrencyCode="eth"
            visible
          />
        ) : null}

        <header style={styles.header}>
          <h1 style={styles.heading}>Swap Fiat to Crypto Instantly</h1>
          <p style={styles.subText}>
            Seamless, fast, and secure transactions between fiat and crypto.
          </p>
        </header>

        {/* Exchange Section */}
        <section style={styles.exchangeSection}>
          <h2 style={styles.sectionTitle}>Click below to start Exchange</h2>

          <button style={styles.swapButton} onClick={handleSwapClick}>
            Exchange Now
          </button>
        </section>

        {/* Benefits Section */}
        <section style={styles.benefitsSection}>
          <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
          <ul style={styles.benefitsList}>
            <li style={styles.benefitItem}>
              <span style={styles.icon}>🔒</span> Secure and encrypted
              transactions
            </li>
            <li style={styles.benefitItem}>
              <span style={styles.icon}>⚡</span> Instant conversions at
              competitive rates
            </li>
            <li style={styles.benefitItem}>
              <span style={styles.icon}>💸</span> Low fees for maximum value
            </li>
            <li style={styles.benefitItem}>
              <span style={styles.icon}>🌎</span> Available worldwide with 24/7
              support
            </li>
          </ul>
        </section>

        {/* Security Information */}
        <section style={styles.securitySection}>
          <h2 style={styles.sectionTitle}>Your Security is Our Priority</h2>
          <p style={styles.securityText}>
            We use industry-leading 256-bit encryption to ensure your funds and
            personal information are protected. All transactions are monitored
            in real-time to provide you with a safe and reliable experience.
          </p>
        </section>
      </MoonPayProvider>
    </div>
  );
}

// Inline styling for the components
const styles = {
  container: {
    backgroundImage: 'url("/background.png")',
    backgroundColor: "#0B062B",
    textAlign: "center",
    padding: "50px 20px",
    minHeight: "100vh",
    color: "#333",
  },
  header: {
    marginBottom: "40px",
  },
  heading: {
    fontSize: "36px",
    background: "linear-gradient(to right, #32d8f9, #aef1ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },
  subText: {
    fontSize: "18px",
    color: "white",
    marginBottom: "30px",
  },
  exchangeSection: {
    background:
      "linear-gradient(to right, rgba(174, 242, 255, 0.15), rgba(174, 242, 255, 0.15))",
    borderRadius: "10px",
    padding: "30px",
    width: "80%",
    maxWidth: "500px",
    margin: "0 auto 40px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "24px",
    background: "linear-gradient(to right, #32d8f9, #aef1ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "15px",
    fontSize: "18px",
    borderRadius: "5px",
    border: "1px solid #cbd5e0",
    marginBottom: "20px",
  },
  swapButton: {
    padding: "0.5rem 1rem",
    background: "linear-gradient(to right, #32D8F9, #B9F3FF)",
    color: "black",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  swapButtonHover: {
    backgroundColor: "#2b6cb0",
  },
  benefitsSection: {
    background:
      "linear-gradient(to right, rgba(174, 242, 255, 0.15), rgba(174, 242, 255, 0.15))",
    padding: "40px 20px",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "800px",
    margin: "0 auto 40px auto",
  },
  benefitsList: {
    listStyleType: "none",
    padding: 0,
  },
  benefitItem: {
    fontSize: "18px",
    color: "white",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "24px",
    marginRight: "10px",
  },
  securitySection: {
    padding: "20px 20px",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "700px",
    margin: "0 auto",
    background:
      "linear-gradient(to right, rgba(174, 242, 255, 0.15), rgba(174, 242, 255, 0.15))",
  },
  securityText: {
    fontSize: "16px",
    color: "white",
    lineHeight: "1.6",
  },
};

export default App;
