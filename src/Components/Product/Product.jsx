import React from "react";
import { Box } from "@mui/system";
import ProductItem from "../ProductItem/ProductItem";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

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

      {showProduct.length ? (
        showProduct.map((item) => {
          return (
            <SnackbarProvider key={item.id} maxSnack={3}>
              <ProductItem key={item.id} product={item} />
            </SnackbarProvider>
          );
        })
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>No Product Found</h1>
          <ProductionQuantityLimitsIcon sx={{ fontSize: 100 }} />
        </div>
      )}
    </Box>
  );
};

export default Product;
