import { Fragment } from "react";
import { Product } from "../../app/models/Product";
interface Props {
  products: Product[];
  onAddProductHandler: () => void;
}
function Catalog({ products, onAddProductHandler }: Props) {
  return (
    <Fragment>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          );
        })}
      </ul>
      <button onClick={onAddProductHandler}>Add Product</button>
    </Fragment>
  );
}

export default Catalog;
