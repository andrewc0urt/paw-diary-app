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
export default function AddListItemForm() {
  return (
    <ListItem sx={{ backgroundColor: "lightgoldenrodyellow" }}>
      <form action="">
        <TextField
          id=""
          label="Add Allergy"
          //   type="search"
          variant="standard"
          slotProps={{
            inputLabel: { shrink: true }, // Keeps the label floating
          }}
          sx={{ marginBottom: "1rem" }}
          fullWidth
        />
        <TextField
          id=""
          label="Description (optional)"
          //   type="search"
          variant="standard"
          slotProps={{
            inputLabel: { shrink: true }, // Keeps the label floating
          }}
          helperText="Feel free to add more info about *name's* allergy!"
          sx={{ marginBottom: "1rem" }}
          fullWidth
        />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" size="small" endIcon={<AddCircleIcon />}>
            Add
          </Button>
        </div>
      </form>
    </ListItem>
  );
}

// sx={{ color: "#1976D2" }}
