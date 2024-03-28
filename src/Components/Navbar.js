import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { HiMenu } from "react-icons/hi";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      id: "home", // Add ID for Home section
    },
    {
      text: "About",
      icon: <InfoIcon />,
      id: "about", // Add ID for About section
    },
    {
      text: "Music",
      icon: <MusicNoteIcon />,
      id: "music", // Add ID for Music section
    },
    {
      text: "Contact",
      icon: <ContactMailIcon />,
      id: "contact", // Add ID for Contact section
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" className="nav-logo" />
      </div>
      <div className="navbar-links-container">
        {/* Use anchor links with corresponding IDs */}
        {menuOptions.map((item) => (
          <a key={item.text} href={`#${item.id}`}>
            {item.text}
          </a>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiMenu onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
