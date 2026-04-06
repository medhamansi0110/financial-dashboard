import React, { useState, useEffect } from "react";
import "../../styles/Transactions.css";


const Transactions = ({ role }) => {

  const mode = role;

  const defaultTransactions = [
    {
      asset: "Bitcoin",
      sub: "BTC-USD",
      hash: "0x4a92...3f81",
      type: "purchase",
      date: "Oct 24, 2023",
      time: "14:22:10 UTC",
      amount: "+2.45 BTC",
      value: "$84,203.12",
      status: "confirmed",
    },
    {
      asset: "Ethereum",
      sub: "ETH-USD",
      hash: "0x7c11...9a22",
      type: "liquidation",
      date: "Oct 24, 2023",
      time: "09:15:45 UTC",
      amount: "-15.00 ETH",
      value: "$27,450.00",
      status: "confirmed",
    },
    {
      asset: "USDC",
      sub: "Circle-Stable",
      hash: "0x12f4...bb09",
      type: "transfer",
      date: "Oct 23, 2023",
      time: "23:01:12 UTC",
      amount: "500,000.00 USDC",
      value: "$500,000.00",
      status: "pending",
    },
  ];

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : defaultTransactions;
  });

  // LOCAL STORAGE SAVE
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // MOCK API + FALLBACK 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(res => res.json())
      .then(data => {
        const apiData = data.map((item, index) => ({
          asset: index === 0 ? "Bitcoin" : index === 1 ? "Ethereum" : "USDC",
          sub: "API-Data",
          hash: "0xAPI..." + index,
          type: ["purchase", "liquidation", "transfer"][index % 3],
          date: "Oct 25, 2023",
          time: "12:00:00 UTC",
          amount: `${(index + 1) * 2} Units`,
          value: `$${(index + 1) * 10000}`,
          status: "confirmed",
        }));

        setTransactions(apiData);
      })
      .catch(() => {
        console.log("API failed, using local data");
      });
  }, []);

  //  EXPORT FUNCTION
  const exportToCSV = () => {
    if (!transactions.length) {
      alert("No data to export");
      return;
    }

    const headers = [
      "Asset",
      "Sub Asset",
      "Transaction Hash",
      "Type",
      "Date",
      "Time",
      "Amount",
      "Value",
      "Status"
    ];

    const fields = [
      "asset",
      "sub",
      "hash",
      "type",
      "date",
      "time",
      "amount",
      "value",
      "status"
    ];

    const csvRows = [
      headers.join(","),
      ...transactions.map(row =>
        fields.map(field => {
          const value = row[field] || "";
          return `"${String(value).replace(/"/g, '""')}"`;
        }).join(",")
      )
    ];

    const csvString = "\uFEFF" + csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="transactions-page">
      <div className="transactions-content">

        <div className="transactions-header">
          <div className="header-left">
            <h1>Institutional Portfolio</h1>
            <p className="ledger-title">TRANSACTION LEDGER</p>
          </div>
        </div>

        <div className="transactions-cards">
          <div className="card large">
            <p>Total Volume Transacted</p>
            <h2>$14,285,902.50</h2>
            <span className="positive">+12.5%</span>
          </div>

          <div className="card">
            <p>Active Assets</p>
            <h2>24</h2>
          </div>

          <div className="card">
            <p>Avg Ticket Size</p>
            <h2>$58.2K</h2>
          </div>
        </div>

        <div className="transactions-table">

          <div className="table-header">
            <h3>Recent Transactions</h3>

            <div className="table-actions">
              <input
                type="text"
                placeholder="Search hash or asset..."
                className="search-bar"
              />

              <button
                onClick={exportToCSV}
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Download CSV
              </button>

              {mode === "admin" && (
                <button className="add-btn">+ Add Transaction</button>
              )}
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Transaction Hash</th>
                <th>Type</th>
                <th>Date & Time</th>
                <th>Amount</th>
                <th>Status</th>
                {mode === "admin" && <th>Actions</th>}
              </tr>
            </thead>

            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index}>
                  <td>
                    <div className="asset">
                      <strong>{tx.asset}</strong>
                      <span>{tx.sub}</span>
                    </div>
                  </td>

                  <td className="hash">{tx.hash}</td>

                  <td>
                    <span className={`badge ${tx.type}`}>
                      {tx.type}
                    </span>
                  </td>

                  <td>
                    <div>
                      <strong>{tx.date}</strong>
                      <span>{tx.time}</span>
                    </div>
                  </td>

                  <td>
                    <div>
                      <strong>{tx.amount}</strong>
                      <span>{tx.value}</span>
                    </div>
                  </td>

                  <td>
                    <span className={`status ${tx.status}`}>
                      {tx.status}
                    </span>
                  </td>

                  {mode === "admin" && (
                    <td>
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {mode === "viewer" && (
          <div className="readonly-box">
            <h4>Read-Only Session Active</h4>
            <p>
              You are currently accessing in Viewer Mode. You can only view
              transactions. Switch to Admin mode to add, edit, or delete.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Transactions;