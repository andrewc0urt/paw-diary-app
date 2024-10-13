import BasicInfo from "./BasicInfo";
import CurrentFood from "./CurrentFood";
import HealthAndDetails from "./HealthAndDetails";
import PetAvatar from "./PetAvatar";
import Divider from "@mui/material/Divider";
import AppButton from "../../components/AppButton";
import OwnerInfo from "./OwnerInfo";
import Temp from "../profile-version2/MedicinesList";
import BasicInfoTemp from "../profile-version2/BasicInfoTemp";
import OwnerInfoTemp from "../profile-version2/OwnerInfoTemp";
import HealthAndDetailsTemp from "../profile-version2/HealthAndDetailsTemp";
import CurrentFoodTemp from "../profile-version2/CurrentFoodTemp";
import MoreInfoPopover from "../profile-version2/MoreInfoPopover";
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
      <BasicInfoTemp />
      {/* <Divider variant="middle" /> */}
      {/* <Button text={"Edit Profile"} /> */}
      <OwnerInfoTemp />
      <HealthAndDetailsTemp />
      <CurrentFoodTemp />
      <AppButton text={"Edit Profile"} />

      {/* <Temp /> */}
    </>
  );
}
