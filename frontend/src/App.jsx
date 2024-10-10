// import "./App.css";

import Navbar from "./components/Navbar";
import SignIn from "./pages/sign-in/SignIn";

const isLoggedIn = () => {
  return true;
};

function App() {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn()} />
      {/* <h1>Initial Paw Diary Setup</h1> */}
      <SignIn />
    </>
  );
}

export default App;
