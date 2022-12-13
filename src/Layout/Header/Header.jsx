import "./Header.css";
import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

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
              <Link
                activeClass="active-link"
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                Home
              </Link>
              <Link
                activeClass="active-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                About
              </Link>
              <Link
                activeClass="active-link"
                to="collection"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                Collection
              </Link>
              <Link
                activeClass="active-link"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                Roadmap
              </Link>
              <Link
                activeClass="active-link"
                to="team"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                Team
              </Link>
              <Link
                activeClass="active-link"
                to="faq"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                FAQ
              </Link>
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
