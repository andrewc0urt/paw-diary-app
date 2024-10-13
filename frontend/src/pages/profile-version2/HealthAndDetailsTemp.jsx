import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

import AllergyAndMedicationsList from "../profile/AllergyAndMedicationsList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";

import AccordionEx from "./AccordionEx";
import AllergiesList from "./AllergiesList";
import MedicinesList from "./MedicinesList";

const petWeight = "45.6";
const lastVisit = "1/25/2021";

// custom color for the TextField components
const customBlue = blue[500];

const medicalHealthList = [
  {
    id: 1,
    type: "Allergy",
    description: "Allergic to grass",
  },
  {
    id: 2,
    type: "Medicine",
    description:
      "Heartworm medication - Simparica Trio Chewable Tablet for Dogs",
  },
];

// Create a string with each description on a new line
const allergiesAndMedications = medicalHealthList
  .map(
    (item) => `${(<ReportProblemIcon />)} ${item.type} - ${item.description}`
  )
  .join("\n");

// const handleExpandClick = () => {
//   return <AllergyAndMedicationsList />;
// };

export default function HealthAndDetailsTemp() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "40ch" },
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <div className="section-title">
        <Typography variant="h5">Wellness Check</Typography>
      </div>

      <TextField
        label="Weight"
        variant="filled"
        // color={color}
        focused
        value={petWeight}
        slotProps={{
          input: {
            readOnly: true,
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: customBlue, // Default border color
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: customBlue, // Hover border color
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: customBlue, // Focused border color
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: customBlue, // Focused label color
          },
        }}
      />

      <TextField
        label="Last Vet Visit"
        variant="filled"
        // color={color}
        focused
        value={lastVisit}
        slotProps={{
          input: {
            readOnly: true,
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: customBlue, // Default border color
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: customBlue, // Hover border color
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: customBlue, // Focused border color
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: customBlue, // Focused label color
          },
        }}
      />

      <AccordionEx textLabel={"Allergies"} ListComponent={AllergiesList} />

      <AccordionEx textLabel={"Medicines"} ListComponent={MedicinesList} />
    </Box>
  );
}
