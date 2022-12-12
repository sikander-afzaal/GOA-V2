import "./styles/About.css";
import Button from "../../Components/Button/Button";

const About = () => {
  return (
    <div className="container about-wrapp">
      <img src="/about-bg.png" alt="" className="about-bg" />
      <img src="/breakline.png" alt="" className="line1" />
      <img src="/breakline2.png" alt="" className="line2" />
      <img src="/circle.png" alt="" className="circle" />
      <img src="/triangle.svg" alt="" className="triangle" />
      <img src="/mob-triangle.svg" alt="" className="mob-triangle" />
      <div className="about-div">
        <div className="left-about">
          <h2 className="trajan">
            WELCOME <br /> ASGARDIANS
          </h2>
          <p>
            Gods of Asgard is a P2E NFT game rooted in Norse mythology and
            powered by the Avalanche blockchain. Battle, survive, and earn your
            way though an epic Battle-Royale while exploring the vast open world
            of Midgard. Ready your weapons, the battle for the nine realms
            begins now.
          </p>
          <Button cta text="WHITEPAPER" width={160} height={50} />
        </div>
        <img src="/about.png" alt="" />
      </div>
    </div>
  );
};

export default About;
