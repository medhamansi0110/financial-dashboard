import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">💰 Finance Tracker</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/insights">Insights</Link>
      </div>
    </div>
  );
}

export default Navbar;