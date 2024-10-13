import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AllergiesList() {
  const [checked, setChecked] = useState([0]);
  const medicalHealthList = [
    {
      id: 1,
      type: "Allergy",
      description: "Allergic to grass",
    },
    {
      id: 2,
      type: "Allergy",
      description: "Food allergy with eggs and dairy ",
    },
  ];

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}>
      {medicalHealthList.map((each) => {
        const labelId = `checkbox-list-label-${each.description}`;

        return (
          <ListItem
            key={each.id}
            // secondaryAction={
            //   <IconButton edge="end" aria-label="comments">
            //     <DeleteIcon />
            //   </IconButton>
            // }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(each)} dense>
              <ListItemIcon>
                {each.type === "Allergy" ? (
                  <ReportProblemIcon />
                ) : (
                  <MedicalServicesIcon />
                )}
              </ListItemIcon>
              <ListItemText id={labelId} primary={each.description} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
