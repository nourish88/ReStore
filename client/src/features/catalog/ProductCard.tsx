import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Avatar,
} from "@mui/material";
import { Product } from "../../app/models/Product";
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const priceToShow = (product.price / 100).toFixed(2);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {product.name.charAt(0).toLocaleUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: {
            fontWeight: "bold",
            color: "primary.main",
          },
        }}
      />
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: "contain",
          bgcolor: "primary.light",
        }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary">
          $ {priceToShow}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>

    // <ListItem key={product.id}>
    //   <ListItemAvatar>
    //     <Avatar src={product.pictureUrl} />
    //   </ListItemAvatar>
    //   <ListItemText>
    //     {product.name} - {product.price}
    //   </ListItemText>
    // </ListItem>
  );
};

export default ProductCard;
