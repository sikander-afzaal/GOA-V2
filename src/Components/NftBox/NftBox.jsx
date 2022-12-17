import React from "react";
import "./NftBox.css";
function NftBox({ img, desc: { name, details }, poster }) {
  return (
    <div className="wrapper-character">
      <video
        playsInline="playsinline"
        autoPlay
        muted
        loop
        src={img}
        poster={poster}
      />
      <div className="pop-div">
        <p className="pop-text">{details}</p>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default NftBox;
