import "./Header.css";
import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    });
  }, []);

  return (
    <div
      className="container header-wrapp"
      style={{ background: headerScroll ? "#0c0a08" : "transparent" }}
    >
      <header>
        <div className="left-header">
          <img src="/logo.png" alt="" />
          <div className={`inner-header ${headerToggle ? "active-nav" : ""}`}>
            <nav>
              <a
                onClick={() => setHeaderToggle(false)}
                className="active-link"
                href="#"
              >
                Home
              </a>
              <a onClick={() => setHeaderToggle(false)} href="#">
                About
              </a>
              <a onClick={() => setHeaderToggle(false)} href="#">
                Collection
              </a>
              <a onClick={() => setHeaderToggle(false)} href="#">
                Roadmap
              </a>
              <a onClick={() => setHeaderToggle(false)} href="#">
                Team
              </a>
              <a onClick={() => setHeaderToggle(false)} href="#">
                FAQ
              </a>
            </nav>
            <div className="right-header">
              <div>
                <a href="#" target={"blank"}>
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
                <a href="#" target={"blank"}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
              <div>
                <Button width={112} height={50} text="Sign In" />
                <Button width={160} cta height={50} text="Play Demo" />
              </div>
            </div>
          </div>
          <FontAwesomeIcon
            style={{ color: headerToggle ? "var(--orange)" : "white" }}
            onClick={() => setHeaderToggle((prev) => !prev)}
            icon={headerToggle ? faXmark : faBars}
          />
        </div>
      </header>
      {headerToggle && (
        <div onClick={() => setHeaderToggle(false)} className="overlay"></div>
      )}
    </div>
  );
};

export default Header;
