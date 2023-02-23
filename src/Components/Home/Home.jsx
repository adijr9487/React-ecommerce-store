import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import React from "react";
import StoreIcon from "@mui/icons-material/Store";

const Home = ({ drawerWidth }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexFlow: "column",
        height: "80vh",
        boxSizing: "border-box",
      }}
    >
      <StoreIcon sx={{ fontSize: 100, margin: "0 auto" }} />
      <p style={{ fontSize: 30 }}>Welcome to React Store</p>
      <NavLink
        to="/products"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Button variant="contained" color="primary">
          Go to Products
        </Button>
      </NavLink>
    </Box>
  );
};

export default Home;
