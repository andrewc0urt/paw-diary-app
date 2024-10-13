import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

const breed = "Golden Retriever";
const dob = "9/5/2019";
const age = "5 years old";

// custom color for the TextField components
const customBlue = blue[500];

const petName = "Ruffles";

export default function BasicInfoTemp() {
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
        <Typography variant="h5">Meet {petName}</Typography>
      </div>

      <TextField
        label="Breed"
        variant="filled"
        // color={color}
        focused
        value={breed}
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
        label="Date of Birth"
        variant="filled"
        // color={color}
        focused
        value={dob}
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
        label="Age"
        variant="filled"
        // color={color}
        focused
        value={age}
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
