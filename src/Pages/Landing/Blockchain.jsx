import "./styles/Blockchain.css";
import Button from "../../Components/Button/Button";

const Blockchain = () => {
  return (
    <div className="container">
      <div className="blockchain-div">
        <h2 className="title trajan">BUILT ON THE BLOCKCHAIN</h2>
        <p className="sub">
          Combining gaming with blockchain technology, it's now possible to
          provide a way for gamers to be rewarded for doing what they love,
          playing games.
        </p>
        <div className="blockchain-row">
          <div className="blockchain-box">
            <h3 className="trajan">DEFI</h3>
            <p>
              With Decentralized Finance, we can leverage blockchain ran economy
              models. This creates community ran economies where players can
              earn tokens while they play. The community also holds power with
              Gods of Asgard, with the ability to vote on future updates and
              improvements.
            </p>
            <Button cta text="More Info" width={160} height={50} />
          </div>
          <div className="blockchain-box">
            <h3 className="trajan">Ownership</h3>
            <p>
              Using Blockchain technology, players can own their characters and
              other in-game assets. In traditional gaming, developers of the
              game own and control all assets. Players are free to sell,
              purchase, and trade the blockchain assets including character NFTs
              and tokens earned.
            </p>
            <Button cta text="More Info" width={160} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
