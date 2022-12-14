import "./styles/Roadmap.css";

const Roadmap = () => {
  return (
    <div id="roadmap" className="container roadmap-wrapp">
      <div className="roadmap-div">
        <h2 className="title trajan">ROADMAP</h2>
        <div className="roadmap-grid">
          <h3 className="trajan road-title-1 active-title">Phase 1</h3>
          <h3 className="trajan road-title-2">Phase 2</h3>
          <h3 className="trajan road-title-3">Phase 3</h3>
          <div className="line-roadmap"></div>

          <div className="road-box roadbox-1">
            <ul>
              <li>Development and Launch</li>
              <li>Full model upgrades</li>
              <li>NFT Mint</li>
              <li>Playable Demo</li>
              <li>Whitepaper</li>
              <li>Native Token Launch</li>
              <li>Renting Marketplace</li>
              <li>Game Launch </li>
            </ul>
          </div>
          <div className="road-box roadbox-2">
            <ul>
              <li>PvP Update</li>
              <li>Balance changes</li>
              <li>Further game improvements</li>
            </ul>
          </div>
          <div className="road-box roadbox-3">
            <ul>
              <li>New features</li>
              <li>VR update</li>
              <li>and more...</li>
            </ul>
          </div>
          <div className="active-line-road">
            {" "}
            <img src="/roadmap-pointer.png" alt="" className="pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
