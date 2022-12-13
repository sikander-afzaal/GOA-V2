import About from "./About";
import Blockchain from "./Blockchain";
import Faq from "./Faq";
import Features from "./Features";
import Hero from "./Hero";
import Nft from "./Nft";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Trailer from "./Trailer";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Trailer />
      <Nft />
      <Features />
      <Blockchain />
      <Roadmap />
      <Team />
      <Faq />
    </div>
  );
};

export default Landing;
