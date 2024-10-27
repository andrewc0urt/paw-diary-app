import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const petName = "Ruffles";
const breed = "Golden Retriever";
const dob = "9/5/2019";
const age = "5 years old";
const lastVisit = "1/25/2021";

export default function DashboardProfileCard() {
  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardMedia
        sx={{ width: "100%", height: 300 }}
        image="/dogAvatar.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {[petName]}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Breed: {breed}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          DOB: {dob}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Age: {age}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
          Last Vet Visit: {lastVisit}
        </Typography>
      </CardContent>
      {/* <CardActions sx={{ justifyContent: "flex-end" }}> */}
      <CardActions>
        <Button size="small">Owner Info</Button>
        <Button size="small">Edit Profile</Button>
      </CardActions>
    </Card>
  );
}
