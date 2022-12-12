import "./styles/Hero.css";
import Button from "../../Components/Button/Button";

const Hero = () => {
  return (
    <div className="container hero-wrap">
      <div className="hero-div">
        <img src="/hero-logo.png" alt="" />
        <p>
          Gods of Asgard is a P2E NFT game rooted in Norse mythology and powered
          by the Avalanche blockchain.
        </p>
        <div className="btn-div">
          <Button width={160} height={50} text="MINT NFT" cta />
          <Button text="Renting" width={160} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
