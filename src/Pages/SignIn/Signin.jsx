import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Signin.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUserFunc = (e) => {
    e.preventDefault();
    dispatch(loginUser());
    navigate("/");
  };
  return (
    <div className="container login-wrapp">
      <div className="sign-in-div">
        <Link to={"/"} className="back">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <div className="left-wrapp">
          <div className="left-signIn">
            <h2 className="trajan">WELCOME BACK</h2>
            <form onSubmit={loginUserFunc}>
              <div className="input-div">
                <label htmlFor="email" className="trajan">
                  EMAIL
                </label>
                <input type="email" placeholder="Email Address" id="email" />
              </div>
              <div className="input-div">
                <label htmlFor="pwd" className="trajan">
                  PASSWORD
                </label>
                <input type="password" placeholder="Password" id="pwd" />
              </div>
              <Button text="Login" cta width={160} height={50} />
              <a href="#">Forgot Password?</a>
            </form>
            <p>
              Not a user? <Link to={"/sign-up"}>sign up</Link>
            </p>
          </div>
        </div>
        <div className="right-sign-in">
          <img src="/login.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
