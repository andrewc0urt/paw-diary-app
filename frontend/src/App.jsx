// import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BasicInfo from "./pages/profile/BasicInfo";
import BasicInfoTemp from "./pages/profile-version2/BasicInfoTemp";
import CurrentFood from "./pages/profile/CurrentFood";
import HealthAndDetails from "./pages/profile/HealthAndDetails";
import PetAvatar from "./pages/profile/PetAvatar";
import Profile from "./pages/profile/Profile";

import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Divider from "@mui/material/Divider";
import ProfileTemp from "./pages/profile-version2/ProfileTemp";

const isLoggedIn = () => {
  return true;
};

function App() {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn()} />
      {/* <h1>Initial Paw Diary Setup</h1> */}
      {/* <SignIn />
      <SignUp /> */}
      {/* <Profile /> */}

      <ProfileTemp />

      <Footer />
    </>
  );
}

export default App;
