import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";

const Cart = ({ drawerWidth, product }) => {
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const first = JSON.parse(localStorage.getItem("cart")) || [];
    // const second = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProduct(first);
  }, []);

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
        return <ProductItem key={item.id} product={item} />;
      })}
    </Box>
  );
};

export default Cart;
