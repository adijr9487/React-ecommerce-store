import React from "react";
import { Box } from "@mui/system";
import ProductItem from "../ProductItem/ProductItem";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";

const Product = (props) => {
  const { showProduct } = useSelector((state) => state);
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

      {showProduct.map((item) => {
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
