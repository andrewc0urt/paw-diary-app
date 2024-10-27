import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import CreateIcon from "@mui/icons-material/Create";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useState } from "react";
export default function AddListItemForm({ addNewItemFunction, listCategory }) {
  // set the state for the form text; initially it's an empty string
  const [formPrimaryText, setPrimaryFormText] = useState("");
  const [formSecondaryText, setFormSecondaryText] = useState("");

  const handlePrimaryTextInputChange = (evt) => {
    setPrimaryFormText(evt.target.value);
  };
  const handleSecondaryTextInputChange = (evt) => {
    setFormSecondaryText(evt.target.value);
  };

  // event hanlder function for when the 'Add' button is click
  const handleFormSubmit = (evt) => {
    // console.log("Button clicked");
    evt.preventDefault();
    // call the function passed as a prop to add the new item to the designated list
    addNewItemFunction(listCategory, formPrimaryText, formSecondaryText);
    // reset the form text inputs
    setPrimaryFormText("");
    setFormSecondaryText("");
  };

  // Dynamic labels based on the section prop
  const sectionLabels = {
    treats: "Add Treat or Other Food",
    allergies: "Add Allergy",
    medicines: "Add Medication",
    injuriesAndIllnesses: "Add Injury or Illness",
    behavioralNotes: "Add Behavior Observation",
  };

  const descriptionHelperTexts = {
    treats:
      "Add details like frequency, flavor, or other important notes about this food item.",
    allergies: "Feel free to add more info about the allergy.",
    medicines: "Add dosage or other details about the medication.",
    injuriesAndIllnesses:
      "Feel free to add more details about the injury or illness.",
    behavioralNotes:
      "Use this space to add more details about the behavior, such as triggers, frequency, or context.",
  };

  return (
    <ListItem sx={{ backgroundColor: "lightgoldenrodyellow" }}>
      <form onSubmit={handleFormSubmit}>
        <TextField
          id=""
          label={sectionLabels[listCategory] || "Add allergy"}
          //   type="search"
          variant="standard"
          slotProps={{
            inputLabel: { shrink: true }, // Keeps the label floating
          }}
          sx={{ marginBottom: "1rem" }}
          fullWidth
          multiline
          onChange={handlePrimaryTextInputChange}
          value={formPrimaryText}
        />
        <TextField
          id=""
          label={"Description (optional)"}
          //   type="search"
          variant="standard"
          slotProps={{
            inputLabel: { shrink: true }, // Keeps the label floating
          }}
          helperText={descriptionHelperTexts[listCategory]}
          sx={{ marginBottom: "1rem" }}
          fullWidth
          multiline
          onChange={handleSecondaryTextInputChange}
          value={formSecondaryText}
        />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            variant="contained"
            size="small"
            endIcon={<AddCircleIcon />}
          >
            Add
          </Button>
        </div>
      </form>
    </ListItem>
  );
}

// sx={{ color: "#1976D2" }}
