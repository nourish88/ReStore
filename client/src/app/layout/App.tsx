import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const palletteMode = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palletteMode,
      background: {
        default: palletteMode === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} onHandleThemChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
};

export default App;
