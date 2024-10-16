import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { Link } from "react-router-dom";

// import MenuIcon from "@mui/icons-material/Menu";
// import Button from "@mui/material/Button";

export default function Navbar2({ isLoggedIn }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  //   Navbar links based on whether a user is logged into their account
  const pages = isLoggedIn
    ? [
        { linkName: "Home", routeURL: "/" },
        { linkName: "Dashboard", routeURL: "dashboard" },
        { linkName: "Logout", routeURL: "homepage" },
      ]
    : [
        { linkName: "Home", routeURL: "/" },
        { linkName: "Dashboard", routeURL: "dashboard" },
      ];

  //   Navbar links on the profile icon based on whether a user is logged into their account
  const settings = isLoggedIn
    ? ["Dashboard", "Manage Pet", "Logout"]
    : ["Sign Up", "Log In"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          {/* <Link to="/" style={{ textDecoration: "none" }}> */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/* </Link> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((eachPage) => (
                <MenuItem key={eachPage.linkName} onClick={handleCloseNavMenu}>
                  <Link
                    to={eachPage.routeURL}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {eachPage.linkName}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Link to={"/"}>
            <AdbIcon
              sx={{
                display: { xs: "flex", md: "none", color: "white" },
                mr: 1,
              }}
            />
          </Link> */}

          {/* <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((eachPage) => (
              <Link to={eachPage.routeURL} style={{ textDecoration: "none" }}>
                <Button
                  key={eachPage.linkName}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {eachPage.linkName}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  disabled={!isLoggedIn}
                >
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <Avatar
                    sx={{ width: "50px", height: "50px" }}
                    alt="Travis Howard"
                    src="/tst.jpg"
                  />
                  {/* <Typography>Travis Howard</Typography> */}
                  {/* <Avatar>AC</Avatar> */}
                </IconButton>
              </Tooltip>
            ) : (
              <Box
                sx={{
                  display: { xs: "flex", md: "flex" },
                  gap: 1,
                  alignItems: "center",
                }}
              >
                {/* Use Link component from react-router-dom and wrap each Button component to navigate to Sign In/Sign Up pages */}
                <Link to="/signin">
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    sx={{
                      color: "white",
                      // "&:hover": {
                      //   backgroundColor: "rgba(255, 255, 255, 0.1)",
                      // },
                    }}
                  >
                    Sign in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: "white", color: "blue" }}
                  >
                    Sign up
                  </Button>
                </Link>
              </Box>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
