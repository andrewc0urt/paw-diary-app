import BasicInfo from "./BasicInfo";
import CurrentFood from "./CurrentFood";
import HealthAndDetails from "./HealthAndDetails";
import PetAvatar from "./PetAvatar";
import Divider from "@mui/material/Divider";
import AppButton from "../../components/AppButton";
import OwnerInfo from "./OwnerInfo";
export default function Profile() {
  return (
    <>
      <PetAvatar />
      <Divider variant="middle" />
      <BasicInfo />
      <Divider variant="middle" />
      <OwnerInfo />
      <Divider variant="middle" />
      <HealthAndDetails />
      <Divider variant="middle" />
      <CurrentFood />
      {/* <Divider variant="middle" /> */}
      {/* <Button text={"Edit Profile"} /> */}
      <AppButton text={"Edit Profile"} />
    </>
  );
}
