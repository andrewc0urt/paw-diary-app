import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import AddListItemForm from "./AddListItemForm";

const petAllergyList = [
  {
    id: 1,
    allergyName: "Pollen from trees, grasses, and weeds",
    description: "Usually occurs in the spring",
  },
  {
    id: 2,
    allergyName: "Second allergy",
    description: "",
  },
  {
    id: 3,
    allergyName: "Chicken allergy",
    description: "Upsets her stomach - sometimes has gas",
  },
  {
    id: 4,
    allergyName: "Last allergy",
    description: "50/50",
  },
];

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [allergies, setAllergies] = React.useState(petAllergyList);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Compact View"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Show Additional Details"
        />
      </FormGroup>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Demo>
            <List dense={dense}>
              {allergies.map((each) => {
                return (
                  <ListItem
                    key={each.id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    {/* <ListItemAvatar>
                  <Avatar>
                    <ReportProblemIcon />
                  </Avatar>
                </ListItemAvatar> */}
                    <ReportProblemIcon
                      sx={{ color: "gray", marginRight: "1rem" }}
                    />
                    <ListItemText
                      primary={each.allergyName}
                      secondary={secondary ? each.description : null}
                    />
                  </ListItem>
                );
              })}
              {/* {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                > */}
              {/* <ListItemAvatar>
                    <Avatar>
                      <ReportProblemIcon />
                    </Avatar>
                  </ListItemAvatar> */}
              {/* <ReportProblemIcon
                    sx={{ color: "gray", marginRight: "1rem" }}
                  />
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )} */}
            </List>
          </Demo>
        </Grid>
      </Grid>

      <AddListItemForm />
    </Box>
  );
}
