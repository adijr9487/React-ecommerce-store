import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import CloseIcon from "@mui/icons-material/Close";

import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearch, addSearchKeyword, removeSeachKeyword } from "../../action";
import { Autocomplete, Input, TextField } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const Navbar = (props) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [input, setInput] = React.useState("");

  const dispatch = useDispatch();
  const { cart, favourite, HistorySearch } = useSelector((state) => state);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const removeSearchKeywordHandler = (keyword) => {
    dispatch(removeSeachKeyword(keyword));
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (e.target.value || input) {
        dispatch(setSearch(e.target.value));
        dispatch(addSearchKeyword(e.target.value));
      }
    } else if (e.key === `[a-zA-Z0-9]`) {
      setInput(e.target.value + e.key);
    }
  };
  const handleOption = (e, option) => {
    if (option) {
      setInput(option);
      dispatch(setSearch(option));
      dispatch(addSearchKeyword(option));
    }
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <NavLink
        to="/favourite"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <MenuItem>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={favourite.length} color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <p>Wishlist</p>
        </MenuItem>
      </NavLink>
      <NavLink to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </NavLink>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          width: { sm: `calc(100% - ${props.drawerWidth}px)` },
          ml: { sm: `${props.drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
            onClick={props.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to={"/"} style={{ color: "inherit" }}>
            <StoreIcon />
          </NavLink>
          {/* search bar  */}
          <Search
            style={{
              width: 300,
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            <SearchIcon />
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={[...HistorySearch]}
              style={{ width: "100%" }}
              value={input}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search"
                  onKeyDown={handleSearch}
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    color: "white",
                    fontSize: 16,
                    padding: "0",
                    "& input": {
                      border: "none",
                    },
                  }}
                />
              )}
              renderOption={(params, option) => (
                <div
                  {...params}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "5px 10px",
                  }}
                  onClick={() => {}}
                >
                  <div
                    onClick={(e) => handleOption(e, option)}
                    style={{ width: "100%", padding: 5 }}
                  >
                    {option}
                  </div>
                  <CloseIcon
                    size="small"
                    onClick={() => removeSearchKeywordHandler(option)}
                  ></CloseIcon>
                </div>
              )}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavLink to="/favourite" style={{ color: "inherit" }}>
              <IconButton size="large" color="inherit">
                <Badge badgeContent={favourite.length} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </NavLink>
            <NavLink
              to="/cart"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton size="large" color="inherit">
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </NavLink>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default Navbar;
