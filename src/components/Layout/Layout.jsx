import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./Layout.css";

function Layout({ children, role, setRole }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">

        <Header role={role} setRole={setRole} />

        {children}
      </div>
    </div>
  );
}

export default Layout;