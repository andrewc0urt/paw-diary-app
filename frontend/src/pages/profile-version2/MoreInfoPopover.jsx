import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";

export default function MoreInfoPopover({ popoverText }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{ display: "flex", alignSelf: "flex-end" }}>
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */}
      <InfoIcon
        onClick={handleClick}
        sx={{
          fontSize: "medium",
          cursor: "pointer",
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ minWidth: "300px", maxWidth: "300px", p: 2 }}>
          {popoverText}
        </Typography>
      </Popover>
    </div>
  );
}
