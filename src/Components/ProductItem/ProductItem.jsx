import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Progress from "./Progress/Progress";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useSnackbar } from "notistack";

import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemToCart,
  addItemToFavourite,
  removeItemToFavourite,
} from "../../action";

const ProductItem = ({ product }) => {
  const [marks, setMarks] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { cart, favourite } = useSelector((state) => state);

  const handleClick = (message, variant) => {
    enqueueSnackbar(message, { variant: variant });
  };

  useEffect(() => {
    // const first = JSON.parse(localStorage.getItem("favourite")) || [];
    // const second = JSON.parse(localStorage.getItem("cart")) || [];

    let first_if_contains = favourite.some((items) => items.id === product.id);
    let second_if_contains = cart.some((items) => items.id === product.id);

    if (first_if_contains) {
      setMarks((prev) => [...prev, "favourite"]);
    }
    if (second_if_contains) {
      setMarks((prev) => [...prev, "cart"]);
    }
  }, []);

  const addToHandler = (e, type) => {
    let arr = [];

    if (type === "cart") {
      arr = cart;
    } else if (type === "favourite") {
      arr = favourite;
    }

    let if_contains = arr.some((items) => items.id === product.id);

    if (e.target.value && !if_contains) {
      if (type === "cart") {
        dispatch(addItemToCart(product));
      } else if (type === "favourite") {
        dispatch(addItemToFavourite(product));
      }
      setMarks((prev) => [...prev, type]);
    } else {
      if (type === "cart") {
        dispatch(removeItemToCart(product));
      } else if (type === "favourite") {
        dispatch(removeItemToFavourite(product));
      }
      setMarks((prev) => prev.filter((item) => item !== type));
    }

    // localStorage.setItem(type, JSON.stringify(arr));
    if (if_contains) {
      handleClick(`Item successfully removed from ${type}`, "default");
    } else {
      handleClick(`Item successfully added to ${type}`, "info");
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 1,
        display: "flex",
        justifyContent: "space-between",
        flexFlow: "column",
      }}
    >
      <div>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={product.image}
          style={{ objectFit: "contain" }}
          sx={{ padding: "1rem" }}
        />
        <CardContent>
          {/* title  */}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="left"
          >
            {product.title}
          </Typography>

          {/* rating  */}
          <div style={{ display: "flex" }}>
            <Progress value={product.rating.rate * 20} />
            <Typography
              gutterBottom
              variant="p"
              component="div"
              textAlign="left"
            >
              {product.rating.count}
            </Typography>
          </div>

          {/* price  */}
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            textAlign="left"
          >
            ${product.price}
          </Typography>

          {/* description  */}
          <Typography variant="body2" color="text.secondary" textAlign="left">
            {product.description}
          </Typography>
        </CardContent>
      </div>
      <div>
        <CardActions>
          <ToggleButtonGroup
            value={marks}
            aria-label="device"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ToggleButton
              onClick={(e) => addToHandler(e, "favourite")}
              sx={{ width: "50%" }}
              value="favourite"
              aria-label="favourite"
            >
              <FavoriteIcon sx={{ pointerEvents: "none" }} />
            </ToggleButton>
            <ToggleButton
              onClick={(e) => addToHandler(e, "cart")}
              sx={{ width: "50%" }}
              value="cart"
              aria-label="cart"
            >
              <AddShoppingCartIcon sx={{ pointerEvents: "none" }} />
            </ToggleButton>
          </ToggleButtonGroup>
        </CardActions>
      </div>
    </Card>
  );
};

export default ProductItem;
