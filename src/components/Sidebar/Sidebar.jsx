import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* TOP */}
      <div className="sidebar-top">
        <h2 className="logo">Equilibrium</h2>

        <div className="menu">
          <Link to="/">Dashboard</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/insights">Insights</Link>
        </div>
      </div>

      <div className="sidebar-bottom">
        <Link to="/settings">⚙ Settings</Link>
        <Link to="/logout">↩ Logout</Link>
      </div>

    </div>
  );
}

export default Sidebar;