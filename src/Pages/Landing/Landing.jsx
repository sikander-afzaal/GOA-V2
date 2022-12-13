import About from "./About";
import Blockchain from "./Blockchain";
import Features from "./Features";
import Hero from "./Hero";
import Nft from "./Nft";
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
    </div>
  );
};

export default Landing;
