import "./styles/DashboardHero.css";

const DashboardHero = () => {
  return (
    <div className="container dash-hero">
      <div className="dash-hero-div">
        <div className="left-dash-hero">
          <div className="dash-filters">
            <a href="https://mint.godsofasgardp2e.com/" target={"blank"}>
              Mint
            </a>
            <button>Rent</button>
            <button>Sacrifice</button>
            <button>Summon</button>
          </div>
          <div className="empty"></div>
        </div>
        <div className="right-hero-dash">
          <div className="rewards-circle1"></div>
          <div className="rewards-circle2"></div>
          <div className="rewards-circle3"></div>
          <div className="inner-dash">
            <h2 className="trajan">Pending Rewards</h2>
            <h3>0</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
