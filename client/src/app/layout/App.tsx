import React, { useEffect, useState } from "react";
import { Product } from "../models/Product";
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
        pictureUrl: "sad",
      },
    ]);
  };
  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          );
        })}
      </ul>
      <button onClick={addProductHandler}>Add Product</button>
    </div>
  );
};

export default App;
