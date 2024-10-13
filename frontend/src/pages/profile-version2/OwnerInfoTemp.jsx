import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

const ownerName = "Ronnie Williams";
const ownerPhone = "910-432-6674";
const ownerEmail = "someEmail@testmail.com";

// custom color for the TextField components
const customBlue = blue[500];

const petName = "Ruffles";

export default function OwnerInfoTemp() {
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
        <Typography variant="h5">{petName}'s Human</Typography>
      </div>

      <TextField
        label="Name"
        variant="filled"
        // color={color}
        focused
        value={ownerName}
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
        label="Phone"
        variant="filled"
        // color={color}
        focused
        value={ownerPhone}
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
        label="Email"
        variant="filled"
        // color={color}
        focused
        value={ownerEmail}
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
