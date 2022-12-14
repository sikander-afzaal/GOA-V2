import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Signin from "./Pages/SignIn/Signin";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
