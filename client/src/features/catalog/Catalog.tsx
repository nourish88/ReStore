import { useEffect, useState } from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";

function Catalog(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    // fetch("https://localhost:5001/api/Products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
    agent.Catalog.list().then(products => setProducts(products)).catch(err => console.log(err)).finally(() => setLoading(false));
  }, []);
if(loading) return <LoadingComponent message="Loading Products..."></LoadingComponent>
  return (
    <>
         <ProductList products={products} />
    </>
  );
}

export default Catalog;
