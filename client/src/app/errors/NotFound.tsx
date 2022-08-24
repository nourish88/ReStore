import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { history } from "../..";

export default function NotFound() {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography gutterBottom variant="h3">
        OOps- we could not found what ypu are looking for
      </Typography>
      <Divider />
      {/* <Button fullWidth onClick={() => history.push("/catalog")}>
        Go back to shop
      </Button> */}
      <Button fullWidth component={Link} to="/catalog">
        Go back to shop
      </Button>
    </Container>
  );
}
