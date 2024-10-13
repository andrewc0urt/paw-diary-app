import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import MoreInfoPopover from "./MoreInfoPopover";

const brandName = "Blue Buffalo";
const foodName = "Life Protection Formula Adult Dry Dog Food";
const flavor = "Chicken Brown Rice";

// custom color for the TextField components
const customBlue = blue[500];

const petName = "Ruffles";
const currentFoodPopoverText =
  "Please provide details about your pet's current food, including the brand, product line, flavor, and any specific feeding instructions.";

export default function CurrentFoodTemp() {
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
        <Typography variant="h5" style={{ display: "inline-flex" }}>
          What's on the Menu?{" "}
          <MoreInfoPopover popoverText={currentFoodPopoverText} />
        </Typography>
        {/* <Typography variant="caption">
          Provide {petName}'s current diet.
        </Typography> */}
      </div>

      <TextField
        label="Brand Name"
        variant="filled"
        // color={color}
        focused
        value={brandName}
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
        label="Product Line/Formula"
        variant="filled"
        // color={color}
        multiline
        focused
        value={foodName}
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
        label="Flavor"
        variant="filled"
        // color={color}
        focused
        value={flavor}
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
        label="Feeding Details (optional)"
        variant="filled"
        // color={color}
        focused
        value={""}
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
    </Box>
  );
}
