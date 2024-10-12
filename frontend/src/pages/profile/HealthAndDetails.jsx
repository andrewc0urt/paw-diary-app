import Typography from "@mui/material/Typography";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AllergyAndMedicationsList from "./AllergyAndMedicationsList";

export default function HealthAndDetails() {
  const weight = 45.6;
  const lastVisit = "1/25/2021";
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
        <MonitorHeartIcon />
        <span style={{ fontWeight: "bold" }}>Health & Details</span>
      </Typography>

      <Typography
        variant="subtitle1"
        component="h2"
        style={{
          fontFamily: '"Inter", "sans-serif"',
          //   marginBottom: "12px",
          //   display: "flex",
          //   alignItems: "center",
        }}
      >
        <span style={{ paddingRight: "2px" }}>Weight:</span>
        {weight}lbs
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
        <span style={{ paddingRight: "2px" }}>Last Vet Visit:</span> {lastVisit}
        {/* <PetsIcon /> */}
      </Typography>

      <Accordion
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ minHeight: "28px", maxHeight: "28px" }}
        >
          <Typography
            variant="subtitle1"
            component="h3"
            sx={{
              fontFamily: '"Inter", "sans-serif"',
              display: "flex",
              alignItems: "center",
            }}
          >
            Allergies & Medications
            {/* <PetsIcon /> */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <AllergyAndMedicationsList />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
