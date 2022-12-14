import "./styles/Hero.css";
import Button from "../../Components/Button/Button";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div id="hero" className="container hero-wrap">
      <div className="hero-div">
        <img src="/hero-logo.png" alt="" />
        <p>
          Gods of Asgard is a P2E NFT game rooted in Norse mythology and powered
          by the Avalanche blockchain.
        </p>
        <div className="btn-div">
          <Button
            url="https://mint.godsofasgardp2e.com/"
            width={160}
            height={50}
            text="MINT NFT"
            cta
          />
          <Button text="Renting" width={160} height={50} />
        </div>
        <div className="social-hero">
          <a href="https://discord.com/invite/F3B4sY5RtN" target={"blank"}>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="https://twitter.com/godsofasgardp2e?s=21&t=D4tQYm0V4VeQtorulTCF9g"
            target={"blank"}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
