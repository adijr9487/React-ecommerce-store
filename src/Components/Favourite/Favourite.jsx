import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";

const Favourite = ({ drawerWidth }) => {
  const { favourite } = useSelector((state) => state);

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
      {favourite.length ? (
        favourite.map((item) => {
          return (
            <SnackbarProvider key={item.id} maxSnack={3}>
              <ProductItem product={item} />
            </SnackbarProvider>
          );
        })
      ) : (
        <h1>There is no favourite product</h1>
      )}
    </Box>
  );
};

export default Favourite;
