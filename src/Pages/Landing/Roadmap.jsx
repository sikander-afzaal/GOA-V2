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
              <li>Development & Testing</li>
              <li>Character Modeling Upgrades</li>
              <li>Genesis Legendary NFT Minting</li>
              <li>Whitepaper release</li>
              <li>Playable Game Demo</li>
              <li>$ASG Native Token Launch</li>
              <li>Official Game Launch</li>
              <li>Player-vs-Player (PvP) Release</li>
              <li>Summoning / Sacrifice Launch</li>
              <li>Rental Marketplace Launch</li>
              <li>NFT Marketplace Launch</li>
            </ul>
          </div>
          <div className="road-box roadbox-2">
            <ul>
              <li>Crafting Introduction</li>
              <li>New Maps / Environments Release</li>
              <li>New Gods Introduction</li>
              <li>Launch Gods of Asgard Subnet - godchain</li>
              <li>Skill Balance Adjustments</li>
              <li>Gameplay / Environment Improvements</li>
            </ul>
          </div>
          <div className="road-box roadbox-3">
            <ul>
              <li>Mobile and Console Launch</li>
              <li>Sandbox Metaverse NFT Mint & Access</li>
              <li>Tournament of Champions Events</li>
              <li>...and much more coming...</li>
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
