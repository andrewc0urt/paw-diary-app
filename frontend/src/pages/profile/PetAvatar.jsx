import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";

export default function PetAvatar({ avatarWidth, avatarHeight }) {
  return (
    <div
      className=""
      style={{
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      <Avatar
        alt="Bubba"
        src="../../public/dogAvatar.jpg"
        sx={{
          width: avatarWidth,
          height: avatarHeight,
        }}
      />
      {/* <Typography
        variant="h4"
        component="h2"
        style={{ fontFamily: '"Inter", "sans-serif"' }}
      > */}
      {/* <PetsIcon /> */}
      {/* Bubba */}
      {/* <PetsIcon /> */}
      {/* </Typography> */}
    </div>
  );
}
