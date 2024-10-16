import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PetsIcon from "@mui/icons-material/Pets";
import EmailIcon from "@mui/icons-material/Email";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [value, setValue] = useState(0);

  const navigateToPage = useNavigate();

  return (
    <footer>
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeOutlinedIcon />}
            onClick={() => navigateToPage("/")}
          />

          <BottomNavigationAction
            label="Dashboard"
            icon={<AssessmentIcon />}
            onClick={() => navigateToPage("/dashboard")}
          />
          <BottomNavigationAction label="Manage Pet" icon={<PetsIcon />} />
        </BottomNavigation>
      </Box>

      <Divider variant="middle" />

      <div
        className="contact"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 style={{ marginBottom: "0" }}>Contact us!</h4>
        <p style={{ display: "flex", alignItems: "center", marginTop: "0" }}>
          <EmailIcon sx={{ fontSize: "small", marginRight: "2px" }} />
          <a
            href="mailto:andrew.court.dev@gmail.com"
            style={{ textDecoration: "none" }}
          >
            andrew.court.dev@gmail.com
          </a>
        </p>
      </div>

      <p style={{ textAlign: "center", color: "#808080", fontSize: "0.9rem" }}>
        &copy; Paw Diary 2024
      </p>
    </footer>
  );
}
