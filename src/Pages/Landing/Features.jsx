import "./styles/Features.css";
import Button from "../../Components/Button/Button";

const Features = () => {
  return (
    <div className="container feat-wrap">
      <div className="feature-div">
        <h2 className="title trajan">FEATURES</h2>
        <p className="sub">
          Gods of Asgard features to improve and maximize your strength in the
          battle for the nine realms.
        </p>
        <div className="feature-row">
          <div className="feature-card">
            <img src="/summon.png" alt="" />
            <h3 className="trajan">Summon</h3>
            <p>
              Call upon the Bifrost to summon additional support on the
              battlefield! This feature allows players to combine the power of
              two NFT's with the same rarity to mint a brand new NFT character.
            </p>
            <Button
              url="https://gods-of-asgard.gitbook.io/gods-of-asgard-whitepaper-v1.0/game-economy/summoning"
              cta
              text="More Info"
              width={160}
              height={50}
            />
          </div>
          <div className="feature-card">
            <img src="/sacrifice.png" alt="" />
            <h3 className="trajan">Sacrifice</h3>
            <p>
              Offer your characters as a sacrifice to receive Yggdrasil's
              blessing. Sacrificing allows players to burn their characters to
              mint a brand new NFT character of a higher tier.
            </p>
            <Button
              url="https://gods-of-asgard.gitbook.io/gods-of-asgard-whitepaper-v1.0/game-economy/sacrifice"
              cta
              text="More Info"
              width={160}
              height={50}
            />
          </div>
          <div className="feature-card">
            <img src="/rent.png" alt="" />
            <h3 className="trajan">Rent</h3>
            <p>
              Rent your characters to fellow Asgardians to aid you in battle and
              share the spoils of victory! Using our native renting marketplace,
              NFT owners can rent out their characters for others to play and
              earn a share of rewards.
            </p>
            <Button
              url="https://gods-of-asgard.gitbook.io/gods-of-asgard-whitepaper-v1.0/game-economy/renting"
              cta
              text="More Info"
              width={160}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
