import Typography from "@mui/material/Typography";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export default function OwnerInfo() {
  const ownerName = "Ronnie Williams";
  const ownerPhone = "910-432-6674";
  const ownerEmail = "someEmail@testmail.com";
  return (
    <div
      className="HealthAndDetails"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h6"
        component="h2"
        style={{
          fontFamily: '"Inter", "sans-serif"',
          display: "flex",
          alignItems: "center",
        }}
      >
        <ContactPageIcon />
        <span style={{ fontWeight: "bold" }}>Owner Info</span>
      </Typography>

      <Typography
        variant="subtitle1"
        component="h2"
        style={{
          fontFamily: '"Inter", "sans-serif"',
          //   display: "flex",
          //   alignItems: "center",
        }}
      >
        <span style={{ paddingRight: "2px" }}>Name:</span>
        {ownerName}
        {/* <PetsIcon /> */}
      </Typography>

      <Typography
        variant="subtitle1"
        component="h2"
        style={{
          fontFamily: '"Inter", "sans-serif"',
          //   display: "flex",
          //   alignItems: "center",
        }}
      >
        <span style={{ paddingRight: "2px" }}>Phone:</span>
        {ownerPhone}
        {/* <PetsIcon /> */}
      </Typography>

      <Typography
        variant="subtitle1"
        component="h2"
        style={{
          fontFamily: '"Inter", "sans-serif"',
          //   display: "flex",
          //   alignItems: "center",
        }}
      >
        <span style={{ paddingRight: "2px" }}>Email:</span>
        {ownerEmail}
        {/* <PetsIcon /> */}
      </Typography>
    </div>
  );
}
