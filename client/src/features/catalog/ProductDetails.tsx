import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/Product";
import axios from "axios";
import agent from "../../app/api/agent";
export default function ProductDetails() {
  const [product, setProducts] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  useEffect(
    () => {
      // axios
      //   .get(`https://localhost:5001/api/products/${id}`)
      agent.Catalog
        .details(+id)
        .then(response => setProducts(response.data))
        .catch(error => console.log(error.message))
        .finally(() => setLoading(false));
    },
    [id]
  );
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (!product) {
    return <h1>No Product Found</h1>;
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img
          src={product.pictureUrl}
          alt={product.name}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h3">
          {product.name}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>
                  {product.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>
                  {product.description}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>
                  {product.type}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>
                  {product.brand}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quantity in stock</TableCell>
                <TableCell>
                  {product.quantityInStock}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
