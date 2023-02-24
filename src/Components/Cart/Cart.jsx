import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const Cart = ({ drawerWidth, product }) => {
  const { cart } = useSelector((state) => state);

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
      }}
    >
      {cart.length ? (
        cart.map((item) => {
          return (
            <SnackbarProvider key={item.id} maxSnack={3}>
              <ProductItem key={item.id} product={item} />
            </SnackbarProvider>
          );
        })
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>There is no product in cart</h1>
          <ProductionQuantityLimitsIcon sx={{ fontSize: 100 }} />
        </div>
      )}
    </Box>
  );
};

export default Cart;
