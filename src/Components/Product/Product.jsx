import React, { useState } from "react";
import { Box } from "@mui/system";
import ProductItem from "../ProductItem/ProductItem";

const Product = (props) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {/* Main product section */}
      {props.products.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </Box>
  );
};

export default Product;
