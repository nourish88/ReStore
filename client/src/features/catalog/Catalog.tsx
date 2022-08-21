import { Button } from "@mui/material";

import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";
interface Props {
  products: Product[];
  onAddProductHandler: () => void;
}
function Catalog({ products, onAddProductHandler }: Props) {
  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={onAddProductHandler}>
        Add Product
      </Button>
    </>
  );
}

export default Catalog;
