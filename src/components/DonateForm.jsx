import { useState } from "react";
import apiClient from "./services/api-Client";

const presetAmounts = [50, 100, 250, 500, 1000];

export default function DonateForm() {
  const [selected, setSelected] = useState(null);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amount = selected ?? (custom ? parseInt(custom) : null);

  const initiatePayment = async () => {
    if (!amount || amount < 10) {
      setError("Please enter a valid amount (min 10)");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const authTokens = JSON.parse(localStorage.getItem("authTokens"));
      const token = authTokens?.access;

      if (!token) {
        setError("You must be logged in to donate.");
        setLoading(false);
        return;
      }

      const response = await apiClient.post("payment/initiate/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      if (data.payment_url) {
        window.location.href = data.payment_url;
      } else {
        setError("Payment initiation failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.iconWrap}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="#e8394d">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <h1 style={styles.title}>Make a Donation</h1>
        <p style={styles.subtitle}>Your generosity saves lives</p>

        <div style={styles.presetGrid}>
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              style={{
                ...styles.presetBtn,
                ...(selected === amt && !custom ? styles.presetBtnActive : {}),
              }}
              onClick={() => {
                setSelected(amt);
                setCustom("");
              }}
            >
              {amt} BDT
            </button>
          ))}
        </div>

        <div style={styles.inputWrap}>
          <span style={styles.currency}>BDT</span>
          <input
            type="number"
            placeholder="Custom amount"
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value);
              setSelected(null);
            }}
            style={styles.input}
            min={10}
          />
        </div>

        {amount && amount >= 10 && (
          <div style={styles.summary}>
            Donating <strong style={{ color: "#e8394d" }}>{amount} BDT</strong>
          </div>
        )}

        {error && <p style={styles.error}>{error}</p>}

        <button
          style={{
            ...styles.payBtn,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
          onClick={initiatePayment}
          disabled={loading}
        >
          {loading ? "Redirecting..." : "Donate Now"}
        </button>

        <p style={styles.secure}>Secured by SSLCommerz</p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #fff5f6 0%, #ffe8ea 100%)",
    fontFamily: "Georgia, serif",
    padding: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "24px",
    padding: "48px 40px",
    width: "100%",
    maxWidth: "440px",
    boxShadow: "0 20px 60px rgba(232,57,77,0.12)",
    textAlign: "center",
  },
  iconWrap: { marginBottom: "16px" },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "0 0 8px 0",
  },
  subtitle: { fontSize: "15px", color: "#888", marginBottom: "32px" },
  presetGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    marginBottom: "20px",
  },
  presetBtn: {
    padding: "12px 8px",
    borderRadius: "12px",
    border: "2px solid #f0f0f0",
    background: "#fafafa",
    fontSize: "14px",
    fontWeight: "600",
    color: "#444",
    cursor: "pointer",
  },
  presetBtnActive: {
    border: "2px solid #e8394d",
    background: "#fff5f6",
    color: "#e8394d",
  },
  inputWrap: {
    display: "flex",
    alignItems: "center",
    border: "2px solid #f0f0f0",
    borderRadius: "12px",
    padding: "0 16px",
    marginBottom: "20px",
    background: "#fafafa",
  },
  currency: { fontSize: "14px", color: "#aaa", marginRight: "8px" },
  input: {
    flex: 1,
    border: "none",
    background: "transparent",
    fontSize: "16px",
    padding: "14px 0",
    outline: "none",
    color: "#1a1a1a",
  },
  summary: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "20px",
    padding: "12px",
    background: "#fff5f6",
    borderRadius: "10px",
  },
  error: { color: "#e8394d", fontSize: "13px", marginBottom: "12px" },
  payBtn: {
    width: "100%",
    padding: "16px",
    background: "linear-gradient(135deg, #e8394d, #c0202f)",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    fontSize: "17px",
    fontWeight: "700",
    marginBottom: "16px",
  },
  secure: { fontSize: "12px", color: "#bbb" },
};