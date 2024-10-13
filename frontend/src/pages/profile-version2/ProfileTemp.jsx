import PetAvatar from "../profile/PetAvatar";
import BasicInfoTemp from "./BasicInfoTemp";
import OwnerInfoTemp from "./OwnerInfoTemp";
import HealthAndDetailsTemp from "./HealthAndDetailsTemp";
import CurrentFoodTemp from "./CurrentFoodTemp";

export default function ProfileTemp() {
  return (
    <div
      className="ProfileTemp"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <PetAvatar />
      <BasicInfoTemp />
      <OwnerInfoTemp />
      <HealthAndDetailsTemp />
      <CurrentFoodTemp />
    </div>
  );
}
