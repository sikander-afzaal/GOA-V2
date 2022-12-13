import "./Button.css";

const Button = ({ url, cta, text, width, height }) => {
  return cta ? (
    <a
      href={url ? url : "#"}
      target="blank"
      style={{ width: width, height: height }}
      className="cta-btn"
    >
      <div>{text}</div>
    </a>
  ) : (
    <a
      href={url ? url : "#"}
      target="blank"
      style={{ width: width, height: height }}
      className="transparent"
    >
      {text}
    </a>
  );
};

export default Button;
