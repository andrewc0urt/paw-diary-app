import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InteractiveList from "./InteractiveList";

// Dictionary mapping titles to category keys
const titleToCategory = {
  "Current Food": "food",
  "Treats & Misc.": "treats",
  "View All Allergies": "allergies",
  "View All Medicines": "medicines",
  "View Injuries/Illnesses": "injuriesAndIllnesses",
  "View Behavioral Notes": "behavioralNotes",
};

export default function DashboardAccordion({ title }) {
  // Get the category from the dictionary

  const category = titleToCategory[title] || ""; // Default to empty string if not found

  // Handle undefined category
  if (!category) {
    return <Typography>No category found for this title.</Typography>;
  }

  return (
    <div>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <InteractiveList category={category} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
