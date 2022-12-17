import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/DashMain.css";
import { useState } from "react";

const DashMain = () => {
  const [swapFirstData, setSwapFirstData] = useState({
    coin: "AVAX",
    img: "/dashboard/avax.png",
    value: "0.00",
  });
  const [swapSecondtData, setSwapSecondtData] = useState({
    coin: "ASG",
    img: "/dashboard/asg.png",
    value: "0.00",
  });

  const swapFunc = () => {
    const copyFirst = swapFirstData;
    setSwapFirstData(swapSecondtData);
    setSwapSecondtData(copyFirst);
  };

  return (
    <div className="container dash-main-wrapp">
      <img src="/breakline.png" alt="" />
      <div className="dash-main-div">
        <div className="top-main-dash">
          <div className="recent">
            <h2 className="trajan">Recently used nft</h2>
            <div className="nft-cont">
              <img src="/dashboard/nft1.png" alt="" />
              <img src="/dashboard/nft1.png" alt="" />
              <img src="/dashboard/nft1.png" alt="" />
              <img src="/dashboard/nft1.png" alt="" />
              <img src="/dashboard/nft1.png" alt="" />
              <img src="/dashboard/nft1.png" alt="" />
              <img src="/dashboard/nft1.png" alt="" />
            </div>
          </div>
          <div className="nft-swap-div">
            <h2 className="trajan">Buy $ASG</h2>
            <p>
              Balance 3022.4852{" "}
              <span>
                <img src="/dashboard/avax.png" alt="" /> AVAX
              </span>
            </p>
            <div className="swap-div">
              <div className="swap-row">
                <div className="left-swap-row">
                  <div className="swap-input">
                    <input
                      type="text"
                      value={swapFirstData.value}
                      onChange={(e) => {
                        setSwapFirstData((prev) => {
                          return { ...prev, value: e.target.value };
                        });
                      }}
                      placeholder="0.00"
                      className="trajan"
                    />{" "}
                    <span>$12,220</span>
                  </div>
                  <button className="max">MAX</button>
                </div>
                <div className="nft-drop">
                  <button className="nft-selector">
                    <img src={swapFirstData.img} alt="" />
                    <p>{swapFirstData.coin}</p>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </div>
              </div>
              <img
                onClick={swapFunc}
                src="/dashboard/swap-ico.png"
                className="swap-ico"
                alt=""
              />
              <div className="swap-row">
                <div className="left-swap-row">
                  <div className="swap-input">
                    <input
                      type="text"
                      value={swapSecondtData.value}
                      onChange={(e) => {
                        setSwapSecondtData((prev) => {
                          return { ...prev, value: e.target.value };
                        });
                      }}
                      placeholder="0.00"
                      className="trajan"
                    />{" "}
                    <span>$12,220</span>
                  </div>
                  <button className="max">MAX</button>
                </div>
                <div className="nft-drop">
                  <button className="nft-selector">
                    <img src={swapSecondtData.img} alt="" />
                    <p>{swapSecondtData.coin}</p>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </div>
              </div>
            </div>
            <div className="bottom-swap-div">
              <p>
                Balance 3022.4852{" "}
                <span>
                  <img src="/dashboard/asg.png" alt="" /> ASG
                </span>
              </p>
              <button className="swap-btn">SWAP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashMain;
