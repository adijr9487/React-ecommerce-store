import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { SnackbarProvider } from "notistack";

const Favourite = ({ drawerWidth, product }) => {
  const [favProduct, setFavProduct] = useState([]);

  useEffect(() => {
    const first = JSON.parse(localStorage.getItem("favourite")) || [];
    // const second = JSON.parse(localStorage.getItem("cart")) || [];
    setFavProduct(first);
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
      {favProduct.map((item) => {
        return (
          <SnackbarProvider key={item.id} maxSnack={3}>
            <ProductItem product={item} />
          </SnackbarProvider>
        );
      })}
    </Box>
  );
};

export default Favourite;
