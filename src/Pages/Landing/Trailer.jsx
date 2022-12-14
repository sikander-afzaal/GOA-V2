import "./styles/Trailer.css";

const Trailer = () => {
  return (
    <div className="container trailer-wrapp">
      <video src="/trailer.mp4" playsInline autoPlay muted loop />
      <div className="trailer-div">
        <p className="trajan">
          Mysterious forces have begun laying siege upon the realms of
          yggdrasil, the tree of worlds. Odin has called upon the Gods of Asgard
          to take the bifrost and maintain order in the nine realms.
        </p>
      </div>
    </div>
  );
};

export default Trailer;
