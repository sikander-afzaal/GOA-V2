import "./TeamBox.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faLinkedin,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

const TeamBox = ({
  img,
  name,
  role,
  // desc,
  // socials: { fb, linkedin, insta, twitter },
}) => {
  return (
    <div className="team-box">
      <img src={img} alt="" />
      <h3 className="trajan">{name}</h3>
      <h4>{role}</h4>
      {/* <p>{desc}</p>
      <div className="team-social">
        <a href={fb} target={"blank"}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href={linkedin} target={"blank"}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={insta} target={"blank"}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={twitter} target={"blank"}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div> */}
    </div>
  );
};

export default TeamBox;
