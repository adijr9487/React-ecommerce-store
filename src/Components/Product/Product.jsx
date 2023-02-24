import React, { useState } from "react";
import { Box } from "@mui/system";
import ProductItem from "../ProductItem/ProductItem";
import { SnackbarProvider } from "notistack";

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
        return (
          <SnackbarProvider key={item.id} maxSnack={3}>
            <ProductItem product={item} />
          </SnackbarProvider>
        );
      })}
    </Box>
  );
};

export default Product;
