import React, {useEffect} from "react";
import Axios from "axios";
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
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import { GrNotification } from "react-icons/gr";
import {GetNewsByCategory} from "../../api";

const pages = ["Explore", "Licence"];
const settings = [
  "Your profile",
  "Your collections",
  "Settings",
  "Change language",
  "Logout",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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


  // useEffect(async () => {
  //   const obj = await GetNewsByCategory();
  //   if (obj.success) setData(obj.data.photos);
  // }, []);

  return (
    <Box

    >
      <AppBar position="static" sx={{ backgroundColor: "transparent",position:'sticky',left:'0',top:'0' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              sx={{ flexGrow: 1, marginLeft: "15px", fontSize: "22px" }}
            >
              <img
                src="https://images.pexels.com/lib/api/pexels-white.png"
                alt="logo"
                height="40"
              />
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    marginRight: "25px",
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    fontWeight: "300",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <IconButton
              sx={{
                " &. MuiButtonBase-root": {
                  color: "white",
                },
              }}
            >
              <GrNotification />
            </IconButton>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ mx: "25px" }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
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
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Button
              variant="contained"
              href="#"
              sx={{
                backgroundColor: "rgb(5, 160, 129)",
                textTransform: "capitalize",
                fontSize: "17px",
                fontWeight: "400",
              }}
            >
              Upload
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

    </Box>
  );
}

export default Header;
