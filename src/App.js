import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Box, LinearProgress, Toolbar } from "@mui/material";
import Product from "./Components/Product/Product";

const drawerWidth = 240;
const baseUrl = "https://fakestoreapi.com/";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [showProduct, setShowProduct] = useState([]);
  const [onLoading, setOnLoading] = useState(false);
  const [filter, setFilter] = useState({});
  const [search, setSearch] = useState("");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setOnLoading(true);
    fetch(baseUrl + "products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const categories = new Map();
      const price = [1000, 0];
      products.forEach((product) => {
        categories[product.category] = true;
        if (product.price < price[0]) {
          price[0] = product.price;
        }
        if (product.price > price[1]) {
          price[1] = product.price;
        }
      });
      setShowProduct(products);

      setFilter((prev) => ({
        ...prev,
        rating: [0, 5],
        categories: {
          ...categories,
        },
        price: {
          range: [...price],
          selected: [...price],
        },
      }));

      setOnLoading(false);
    }
  }, [products]);

  useEffect(() => {
    let filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (filter.rating) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating.rate >= filter.rating[0]
      );
      filteredProducts = filteredProducts.filter(
        (product) => product.rating.rate <= filter.rating[1]
      );
    }
    if (filter.categories) {
      filteredProducts = filteredProducts.filter(
        (product) => filter.categories[product.category]
      );
    }
    if (filter.price) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= filter.price.selected[0]
      );
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= filter.price.selected[1]
      );
    }
    setShowProduct(filteredProducts);
  }, [filter, search]);

  return (
    <div className="App">
      <Navbar
        search={(keyword) => setSearch(keyword)}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      {onLoading ? (
        <LinearProgress sx={{ backgroundColor: "#ffcd38" }} />
      ) : null}
      <Sidebar
        setFilter={setFilter}
        filter={filter}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
      />
      <Product products={showProduct} drawerWidth={drawerWidth} />
    </div>
  );
}

export default App;
