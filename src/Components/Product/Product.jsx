import React, { useState } from "react";
import { Box } from "@mui/system";
import ProductItem from "../ProductItem/ProductItem";


const Product = (props) => {
  const [item, setItem] = useState({
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  });
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
