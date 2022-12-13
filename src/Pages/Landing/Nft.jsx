import NftBox from "../../Components/NftBox/NftBox";
import "./styles/Nft.css";

const Nft = () => {
  return (
    <div id="collection" className="container">
      <div className="nft-div">
        <h2 className="trajan title">THE GODS OF ASGARD</h2>
        <p className="sub">
          The God of Asgard are NFTs from our upcoming collection minting May
          1st. Each God is equipped with their own unique skills and story. The
          NFT's act as your playable character and are your key to entering the
          GoA universe.
        </p>
        <div className="nft-grid">
          <NftBox
            img="/nft-imgs/thor.png"
            bg="/nft-imgs/thor-bg.png"
            desc={{
              name: "Thor",
              details:
                "Son of, Odin, and the god of thunder, Thor, wields his mystical hammer, Mjolnir. He is equipped with his belt, Megingjord, bestowing him with increased strength and governance over the powerful element of lightning.",
            }}
          />
          <NftBox
            img="/nft-imgs/freya.png"
            bg="/nft-imgs/freya-bg.png"
            desc={{
              name: "Freya",
              details:
                "Queen of the Valkyries and goddess of love and war, Freya, is equipped with her sword, shield, and magical bow. Blessed by magical forces, she leads her fearless Valkyries into battle; the entheat & powerful league of goddesses, who form her royal ",
            }}
          />
          <NftBox
            img="/nft-imgs/heim.png"
            bg="/nft-imgs/heim-bg.png"
            desc={{
              name: "heimdall",
              details:
                "The watchman of the gods and guardian of the Bifrost; Heimdall, defends the rainbow bridge that connects all nine realms together. He is gifted with the power of prescience; a divine capacity of foresight, allowing him to see and hear across all realms, both mortal and god alike. He wields, Hofund, a sword with the ability to draw energy from other magical entities that exist within the universe.",
            }}
          />
          <NftBox
            img="/nft-imgs/odin.png"
            bg="/nft-imgs/odin-bg.png"
            desc={{
              name: "odin",
              details:
                "The great & powerful all father and king of Asgard. Odin is the strongest, fiercest, and most wise of all the Gods in all the nine realms. Equipped with his magical spear, Gungnir, he is ever ready to bring order to the universe; fighting side by side with his comrades to restore peace and prosperity to its lands.",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Nft;
