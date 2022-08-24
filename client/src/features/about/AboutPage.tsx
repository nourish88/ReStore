import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import { useState } from "react";
import agent from "../../app/api/agent";

const AboutPage = () => {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const getValidationError = () => {
    agent.TestErrors
      .getValidationError()
      .then(() => console.log.apply("should not see this"))
      .catch(err => setValidationErrors(err));
  };
  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Errors for testing purposes
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get400Error().catch(err => console.log(err))}
        >
          Test 400 Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get401Error().catch(err => console.log(err))}
        >
          Test 401 Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get404Error().catch(err => console.log(err))}
        >
          Test 404 Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get500Error().catch(err => console.log(err))}
        >
          Test 500 Error
        </Button>
        <Button variant="contained" onClick={getValidationError}>
          Test Validation Error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 &&
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map(validationError =>
              <ListItem key={validationError}>
                <ListItemText>
                  {validationError}
                </ListItemText>
              </ListItem>
            )}
          </List>
        </Alert>}
    </Container>
  );
};
export default AboutPage;
