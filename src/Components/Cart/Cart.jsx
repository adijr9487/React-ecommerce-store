import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { SnackbarProvider } from "notistack";
const Cart = ({ drawerWidth, product }) => {
  const [cartProduct, setCartProduct] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const first = JSON.parse(localStorage.getItem("cart")) || [];
    // const second = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProduct(first);
  }, [flag]);

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
      {cartProduct.map((item) => {
        return (
          <SnackbarProvider key={item.id} maxSnack={3}>
            <ProductItem setFlag={setFlag} key={item.id} product={item} />
          </SnackbarProvider>
        );
      })}
    </Box>
  );
};

export default Cart;
