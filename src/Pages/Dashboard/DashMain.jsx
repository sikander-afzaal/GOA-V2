import { useState } from "react";
import "./styles/DashMain.css";
import NftBoxDash from "../../Components/NftBoxDash/NftBoxDash";
import Button from "../../Components/Button/Button";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashMain = () => {
  const [swapFirstData, setSwapFirstData] = useState({
    coin: "AVAX",
    img: "/dashboard/avax.png",
    value: "0.00",
    dropOpen: false,
  });
  const [swapSecondtData, setSwapSecondtData] = useState({
    coin: "ASG",
    img: "/dashboard/asg.png",
    value: "0.00",
    dropOpen: false,
  });

  const swapFunc = () => {
    const copyFirst = swapFirstData;
    setSwapFirstData(swapSecondtData);
    setSwapSecondtData(copyFirst);
  };

  return (
    <div className="container dash-main-wrapp">
      <div className="blur-circ1"></div>
      <div className="blur-circ2"></div>
      <img src="/roadmap-break.png" alt="" />
      <div className="dash-main-div">
        <div className="top-main-dash">
          <div className="recent">
            <h2 className="trajan">Recently used nft</h2>
            <div className="nft-cont">
              <img src="/dashboard/nft1.png" alt="" />
              <img src="/dashboard/nft2.png" alt="" />
              <img src="/dashboard/nft3.png" alt="" />
              <img src="/dashboard/nft4.png" alt="" />
              <img src="/dashboard/nft1.png" alt="" />
              <img src="/dashboard/nft2.png" alt="" />
              <img src="/dashboard/nft3.png" alt="" />
              <img src="/dashboard/nft4.png" alt="" />
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
                {/* //first drop down starts here ---------------------- */}
                <div className="nft-drop">
                  <button
                    onClick={() => {
                      setSwapSecondtData((prev) => {
                        return { ...prev, dropOpen: false };
                      });
                      setSwapFirstData((prev) => {
                        return { ...prev, dropOpen: !prev.dropOpen };
                      });
                    }}
                    className="nft-selector"
                  >
                    <img src={swapFirstData.img} alt="" />
                    <p>{swapFirstData.coin}</p>
                    <FontAwesomeIcon
                      className={`${swapFirstData.dropOpen ? "rotate" : ""}`}
                      icon={faChevronDown}
                    />
                  </button>
                  {swapFirstData.dropOpen && (
                    <div className="nft-drop-main">
                      <div
                        onClick={(e) => {
                          setSwapFirstData((prev) => {
                            return {
                              ...prev,
                              dropOpen: false,
                              img: "/dashboard/asg.png",
                              coin: "ASG",
                            };
                          });
                        }}
                        className="drop-item"
                      >
                        <img src="/dashboard/asg.png" alt="" />
                        <p>ASG</p>
                      </div>
                      <div
                        onClick={() => {
                          setSwapFirstData((prev) => {
                            return {
                              ...prev,
                              dropOpen: false,
                              img: "/dashboard/avax.png",
                              coin: "AVAX",
                            };
                          });
                        }}
                        className="drop-item"
                      >
                        <img src="/dashboard/avax.png" alt="" />
                        <p>AVAX</p>
                      </div>
                    </div>
                  )}
                </div>
                {/* {------------------------------------------------------------} */}
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
                {/* //second drop down starts here ---------------------- */}
                <div className="nft-drop">
                  <button
                    onClick={() => {
                      setSwapFirstData((prev) => {
                        return { ...prev, dropOpen: false };
                      });
                      setSwapSecondtData((prev) => {
                        return { ...prev, dropOpen: !prev.dropOpen };
                      });
                    }}
                    className="nft-selector"
                  >
                    <img src={swapSecondtData.img} alt="" />
                    <p>{swapSecondtData.coin}</p>
                    <FontAwesomeIcon
                      className={`${swapSecondtData.dropOpen ? "rotate" : ""}`}
                      icon={faChevronDown}
                    />
                  </button>
                  {swapSecondtData.dropOpen && (
                    <div className="nft-drop-main">
                      <div
                        onClick={() => {
                          setSwapSecondtData((prev) => {
                            return {
                              ...prev,
                              dropOpen: false,
                              img: "/dashboard/asg.png",
                              coin: "ASG",
                            };
                          });
                        }}
                        className="drop-item"
                      >
                        <img src="/dashboard/asg.png" alt="" />
                        <p>ASG</p>
                      </div>
                      <div
                        onClick={() => {
                          setSwapSecondtData((prev) => {
                            return {
                              ...prev,
                              dropOpen: false,
                              img: "/dashboard/avax.png",
                              coin: "AVAX",
                            };
                          });
                        }}
                        className="drop-item"
                      >
                        <img src="/dashboard/avax.png" alt="" />
                        <p>AVAX</p>
                      </div>
                    </div>
                  )}
                </div>
                {/* {------------------------------------------------------------} */}
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
        <div className="nft-row-dash">
          <NftBoxDash
            name="Thor"
            img="/dashboard/thor.png"
            desc="The great & powerful all-father and king of Asgard."
            price="$120"
          />
          <NftBoxDash
            name="Freya"
            img="/dashboard/freya.png"
            desc="Queen of the valkyries and goddess of love and war, Freya"
            price="$120"
          />
          <NftBoxDash
            name="heimdall"
            img="/dashboard/heim.png"
            desc="The great & powerful all-father and king of Asgard."
            price="$120"
          />
          <NftBoxDash
            name="odin"
            img="/dashboard/odin.png"
            desc="The great & powerful all-father and king of Asgard."
            price="$120"
          />
        </div>
        <Button cta text="View Characters" width={190} height={60} />
      </div>
    </div>
  );
};

export default DashMain;
