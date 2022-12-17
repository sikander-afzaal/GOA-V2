import "./styles/DashboardHeader.css";

const DashboardHeader = () => {
  return (
    <div className="container dash-header">
      <header>
        <div className="dash-links">
          <a href="#">Home</a>
          <a href="#" style={{ fontWeight: "700", color: "var(--orange)" }}>
            Dashboard
          </a>
          <a href="#">Game Manual</a>
        </div>
        <button>
          <img src="/metamask.png" alt="" /> <p>Connect To Wallet</p>
        </button>
      </header>
    </div>
  );
};

export default DashboardHeader;
