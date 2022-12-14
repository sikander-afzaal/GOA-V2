import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "../SignIn/Signin.css";

const Signup = () => {
  return (
    <div className="container login-wrapp">
      <div className="sign-in-div">
        <div className="left-wrapp">
          <div className="left-signIn">
            <h2 className="trajan">SIGN UP</h2>
            <form>
              <div className="input-div">
                <label htmlFor="name" className="trajan">
                  USERNAME
                </label>
                <input type="text" placeholder="Username" id="name" />
              </div>
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
              <div className="input-div">
                <label htmlFor="cpwd" className="trajan">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="cpwd"
                />
              </div>
              <Button text="Sign Up" cta width={160} height={50} />
            </form>
            <p>
              Already a user? <Link to={"/sign-in"}>Login</Link>
            </p>
          </div>
        </div>
        <div className="right-sign-in">
          <img src="/register.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
