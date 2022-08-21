import React, { useEffect, useState } from "react";
import { Product } from "../models/Product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";
const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://localhost:5001/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const addProductHandler = () => {
    setProducts((prev) => [
      ...prev,
      {
        name: "product" + (prev.length + 1),
        price: (prev.length + 1) * 100.0,
        id: prev.length + 101,
        brand: "sss",
        description: "add",
        pictureUrl: "/images/products/glove-code1.png",
      },
    ]);
  };
  return (
    <>
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} onAddProductHandler={addProductHandler} />
    </>
  );
};

export default App;
