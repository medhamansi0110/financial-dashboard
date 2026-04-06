import "./Header.css";

function Header({ role, setRole }) {

  const handleRoleChange = (newRole) => {
    setRole(newRole);

    localStorage.setItem("mode", newRole);
  };

  return (
    <div className="top-header">

      <input
        type="text"
        placeholder="Search portfolios..."
        className="search"
      />

      <div className="header-right">

        <div className="role-toggle">
          <button
            className={role === "admin" ? "active" : ""}
            onClick={() => handleRoleChange("admin")}
          >
            ADMIN
          </button>

          <button
            className={role === "viewer" ? "active" : ""}
            onClick={() => handleRoleChange("viewer")}
          >
            VIEWER
          </button>
        </div>

        <span className="icon">🔔</span>

        <div className="avatar">👩</div>

      </div>
    </div>
  );
}

export default Header;