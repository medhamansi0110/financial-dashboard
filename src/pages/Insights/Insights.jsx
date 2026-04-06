import "./Insights.css";
import {
  FaShoppingCart,
  FaUtensils,
  FaPlane,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Insights() {
  const data = [
    { month: "Jan", income: 4000, expenses: 2400 },
    { month: "Feb", income: 3000, expenses: 2210 },
    { month: "Mar", income: 5000, expenses: 2290 },
    { month: "Apr", income: 4780, expenses: 2000 },
    { month: "May", income: 5890, expenses: 2181 },
    { month: "Jun", income: 6390, expenses: 2500 },
  ];

  return (
    <div className="insights-container">
      <div className="insights-header">
        <h1>Insights & Analytics</h1>
        <p>Deep dive into your financial velocity and portfolio resonance.</p>
      </div>

      <div className="ins-top-cards">
        <div className="ins-card">
          <p className="ins-card-title">HIGHEST SPENDING</p>
          <h2>Luxury Lifestyle</h2>
          <p className="ins-amount">$4,280.00 this month</p>
          <div className="ins-progress-bar">
            <div className="ins-progress ins-blue" style={{ width: "70%" }}></div>
          </div>
        </div>

        <div className="ins-card">
          <p className="ins-card-title">SAVINGS RATE</p>
          <h2>32.4%</h2>
          <p className="ins-positive">+4.2% vs last month</p>
          <div className="ins-progress-bar">
            <div className="ins-progress ins-green" style={{ width: "60%" }}></div>
          </div>
        </div>

        <div className="ins-card">
          <p className="ins-card-title">BUDGET STATUS</p>
          <h2>Healthy</h2>
          <p>85% limit reached</p>
          <div className="ins-progress-bar">
            <div className="ins-progress ins-blue" style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>

      <div className="ins-middle-section">
        <div className="ins-chart-box">
          <div className="ins-chart-header">
            <div>
              <h3>Monthly Performance</h3>
              <p>Income vs Expenses trajectory</p>
            </div>

            <div className="ins-legend">
              <span className="ins-income-dot"></span> Income
              <span className="ins-expense-dot"></span> Expenses
            </div>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid stroke="#1f2a3c" />
              <XAxis dataKey="month" stroke="#9aa4b2" />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="income"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="expenses"
                stroke="#94a3b8"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="ins-smart-box">
          <h3>✨ Smart Analysis</h3>

          <div className="ins-analysis">
            <h4>Surplus Velocity Detected</h4>
            <p>
              Your residual income has increased by 14% this quarter.
              Redirecting $850/mo could accelerate your FIRE goal.
            </p>
          </div>

          <div className="ins-analysis">
            <h4>Subscription Leakage</h4>
            <p>
              4 overlapping subscriptions costing $58/mo. Canceling 2 saves more.
            </p>
          </div>

          <div className="ins-analysis">
            <h4>Market Resonance</h4>
            <p>Diversification recommended due to tech stock correlation.</p>
          </div>

          <button className="ins-optimize-btn">Optimize My Plan</button>
        </div>
      </div>

      <div className="ins-heatmap-section">
        <h3>Spending Heat Map</h3>
        <p>Categorical intensity across your ecosystem</p>

        <div className="ins-heatmap-grid">
          <div className="ins-heat-card active">
            <FaShoppingCart />
            <h2>42%</h2>
            <p>RETAIL</p>
          </div>

          <div className="ins-heat-card">
            <FaUtensils />
            <h2>28%</h2>
            <p>DINING</p>
          </div>

          <div className="ins-heat-card">
            <FaPlane />
            <h2>15%</h2>
            <p>TRAVEL</p>
          </div>

          <div className="ins-heat-card">
            <FaBolt />
            <h2>8%</h2>
            <p>UTILITIES</p>
          </div>

          <div className="ins-heat-card">
            <FaShieldAlt />
            <h2>5%</h2>
            <p>WELLNESS</p>
          </div>

          <div className="ins-heat-card">
            <h2>2%</h2>
            <p>MISC</p>
          </div>
        </div>
      </div>

      <div className="ins-portfolio-box">
        <p className="ins-tag">PREDICTIVE MODELING ACTIVE</p>
        <h2>Portfolio Synergy 2.0</h2>
        <p>
          Our system simulated 1,400+ financial scenarios to optimize your future.
        </p>

        <div className="ins-btns">
          <button className="ins-primary">Explore Scenarios</button>
          <button className="ins-secondary">View Raw Logic</button>
        </div>
      </div>
    </div>
  );
}