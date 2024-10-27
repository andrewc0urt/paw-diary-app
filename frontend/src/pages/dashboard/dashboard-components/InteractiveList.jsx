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
import { useState } from "react";

// const petAllergyList = [
//   {
//     id: 1,
//     allergyName: "Pollen from trees, grasses, and weeds",
//     description: "Usually occurs in the spring",
//   },
//   {
//     id: 2,
//     allergyName: "Second allergy",
//     description: "",
//   },
//   {
//     id: 3,
//     allergyName: "Chicken allergy",
//     description: "Upsets her stomach - sometimes has gas",
//   },
//   {
//     id: 4,
//     allergyName: "Last allergy",
//     description: "50/50",
//   },
// ];

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList({ category }) {
  // const [petAllergyList, setPetAllergyList] = useState([]);

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  // const [allergies, setAllergies] = React.useState([]);
  // const [items, setItems] = useState([]);

  const [subsectionLists, setSubsectionLists] = useState({
    food: [],
    treats: [],
    allergies: [],
    medicines: [],
    injuriesAndIllnesses: [],
    behavioralNotes: [],
  });

  // function to add a new item to the desired list
  const addListItem = (category, primaryText, secondaryText) => {
    // console.log(`Category: ${category}`);
    setSubsectionLists((prevLists) => ({
      ...prevLists,
      [category]: [
        ...prevLists[category],
        {
          id: crypto.randomUUID(),
          name: primaryText,
          description: secondaryText,
        },
      ],
    }));
  };

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
              {subsectionLists[category].map((each) => {
                return (
                  <ListItem
                    key={each.id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ReportProblemIcon
                      sx={{ color: "gray", marginRight: "1rem" }}
                    />
                    <ListItemText
                      primary={each.name}
                      secondary={secondary ? each.description : null}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Demo>
        </Grid>
      </Grid>

      {/* 
      Conditionally render the AddListItemForm unless the category is "food". 
      This section allows users to add items to lists for treats, allergies, etc. 
      Future implementation will involve extracting current food information from the database, 
      representing the pet's primary food. 
      Consider if pets might have multiple primary foods throughout the day.
      */}

      {category !== "food" && (
        <AddListItemForm
          addNewItemFunction={addListItem}
          listCategory={category}
        />
      )}
    </Box>
  );
}
