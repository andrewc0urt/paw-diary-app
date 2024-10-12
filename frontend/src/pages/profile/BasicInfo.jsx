import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function BasicInfo() {
  const breed = "Golden Retriever";
  const DOB = "9/5/2019";
  const age = "5 years old";
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
        <InfoIcon />
        <span style={{ fontWeight: "bold" }}>Basic Info</span>
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
        <span style={{ paddingRight: "2px" }}>Breed:</span>
        {breed}
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
        <span style={{ paddingRight: "2px" }}>DOB:</span> {DOB}
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
        <span style={{ paddingRight: "2px" }}>Age:</span> {age}
        {/* <PetsIcon /> */}
      </Typography>
    </div>
  );
}
