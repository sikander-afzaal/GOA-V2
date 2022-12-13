import "./NftBox.css";

const NftBox = ({ img, desc: { name, details }, bg }) => {
  return (
    <div className="nft-box">
      <img src={bg} alt="" className="nft-bg" />
      <img src={img} className="nft-img" alt="" />
      <div className="nft-desc">
        <h3 className="trajan">{name}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default NftBox;
