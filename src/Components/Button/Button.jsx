import "./Button.css";

const Button = ({ cta, text, width, height }) => {
  return cta ? (
    <button style={{ width: width, height: height }} className="cta-btn">
      <div>{text}</div>
    </button>
  ) : (
    <button style={{ width: width, height: height }} className="transparent">
      {text}
    </button>
  );
};

export default Button;
