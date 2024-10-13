import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AllergyAndMedicationsList from "../profile/AllergyAndMedicationsList";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TempList from "./MedicinesList";
import { blue } from "@mui/material/colors";
import AllergiesList from "./AllergiesList";

// custom color for the TextField components
const customBlue = blue[500];

export default function AccordionEx({ textLabel, ListComponent }) {
  return (
    <div>
      <Accordion
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Align to flex-start
          //   padding: "0", // Remove default padding from the accordion
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.06)",
          boxShadow: "none",
          borderBottom: `2px solid #1976d2`, // Default line

          // Override the last-of-type border-radius issue
          "&:last-of-type": {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            // minHeight: "28px",
            // maxHeight: "28px",
            // padding: 0,
            color: "#1976d2",
          }}
        >
          <Typography
            variant="caption"
            component="h3"
            sx={{
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Match TextField label font
              //   display: "flex",
              //   alignItems: "center",
            }}
          >
            {textLabel}
            {/* <PetsIcon /> */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            // alignItems: "center",
            width: "100%",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          {/* <AllergyAndMedicationsList /> */}
          {/* <TempList /> */}
          <ListComponent />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
