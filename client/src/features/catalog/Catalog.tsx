import { useEffect, useState } from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";

function Catalog(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    // fetch("https://localhost:5001/api/Products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
    agent.Catalog.list().then(products => setProducts(products))
  }, []);

  return (
    <>
         <ProductList products={products} />
    </>
  );
}

export default Catalog;
