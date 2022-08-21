import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { Product } from "../../app/models/Product";
interface Props {
  products: Product[];
  onAddProductHandler: () => void;
}
function Catalog({ products, onAddProductHandler }: Props) {
  return (
    <Fragment>
      <List>
        {products.map((product) => {
          return (
            <ListItem key={product.id}>
              <ListItemAvatar>
                <Avatar src={product.pictureUrl} />
              </ListItemAvatar>
              <ListItemText>
                {product.name} - {product.price}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
      <Button variant="contained" onClick={onAddProductHandler}>
        Add Product
      </Button>
    </Fragment>
  );
}

export default Catalog;
