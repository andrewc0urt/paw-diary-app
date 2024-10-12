import Typography from "@mui/material/Typography";

import DiningIcon from "@mui/icons-material/Dining";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function CurrentFood() {
  const brand = "Blue Buffalo";
  const food = "Life Protection Formula Adult Dry Dog Food";
  const flavor = "Chicken Brown Rice";

  return (
    <div
      className="CurrentFood"
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
        <DiningIcon />
        <span style={{ fontWeight: "bold" }}>Current Food</span>
      </Typography>

      <Typography
        variant="subtitle1"
        component="h2"
        style={{
          fontFamily: '"Inter", "sans-serif"',
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <span style={{ paddingRight: "2px" }}>Brand:</span>
        {brand}
        {/* <PetsIcon /> */}
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
        <span style={{ paddingRight: "2px" }}>Name:</span>
        {food}
        {/* <PetsIcon /> */}
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
        <span style={{ paddingRight: "2px" }}>Flavor (if applicable):</span>
        {flavor}
        {/* <PetsIcon /> */}
      </Typography>
    </div>
  );
}
