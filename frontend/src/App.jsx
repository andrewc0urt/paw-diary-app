// import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";

const isLoggedIn = () => {
  return true;
};

function App() {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn()} />
      {/* <h1>Initial Paw Diary Setup</h1> */}
      <SignIn />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
