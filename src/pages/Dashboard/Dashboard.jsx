import "./Dashboard.css";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

function Dashboard() {

  const lineData = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 6000 },
    { name: "Mar", value: 8000 },
    { name: "Apr", value: 5000 },
    { name: "May", value: 9000 },
    { name: "Jun", value: 10000 },
  ];

  const pieData = [
    { name: "Housing", value: 40 },
    { name: "Food", value: 25 },
    { name: "Transport", value: 20 },
    { name: "Utilities", value: 15 },
  ];

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#64748b"];

  return (
    <div className="dashboard">

      <div className="dashboard-title">
        <h1>Financial Overview</h1>
        <p>
          Welcome back. Your portfolio is up <span>+4.2%</span> this month.
        </p>
      </div>

      <div className="cards">

        <div className="card">
          <h4>TOTAL BALANCE</h4>
          <h2>$12,450.00</h2>
          <p className="positive">+12.5% from last month</p>

          <div style={{ height: 60 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h4>MONTHLY INCOME</h4>
          <h2>$5,200.00</h2>
          <p className="positive">On track for goal</p>

          <div className="progress">
            <div className="progress-bar income"></div>
          </div>
        </div>

        <div className="card">
          <h4>MONTHLY EXPENSES</h4>
          <h2>$3,800.00</h2>
          <p className="negative">-4% vs target budget</p>

          <div className="progress">
            <div className="progress-bar expense"></div>
          </div>
        </div>

      </div>

      <div className="charts">

        <div className="chart-box">
          <div className="chart-header">
            <h3>Balance Trend</h3>
            <span>Last 6 Months</span>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="donut-box">
          <h3>Spending Breakdown</h3>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="legend">
            <div className="legend-item">
              <span className="dot housing"></span> Housing
            </div>
            <div className="legend-item">
              <span className="dot food"></span> Food
            </div>
            <div className="legend-item">
              <span className="dot transport"></span> Transport
            </div>
            <div className="legend-item">
              <span className="dot utilities"></span> Utilities
            </div>
          </div>
        </div>

      </div>

      <div className="transactions">
        <div className="transactions-header">
          <h3>Recent Transactions</h3>
          <span>View All</span>
        </div>

        <div className="row">
          <span>Apple Store</span>
          <span className="negative">-$1,299.00</span>
        </div>

        <div className="row">
          <span>Stripe Payout</span>
          <span className="positive">+$4,500.00</span>
        </div>

        <div className="row">
          <span>Nozomi Sushi</span>
          <span className="negative">-$184.20</span>
        </div>

        <div className="row">
          <span>Equinox Fitness</span>
          <span className="negative">-$265.00</span>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;