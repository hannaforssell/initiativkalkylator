import { createTheme, ThemeProvider } from "@mui/material";
import "./styles/App.css";
import { InitiativeCalculator } from "./components/InitiativeCalculator";

const darkTheme = createTheme({
  typography: {
    fontFamily: "Roboto Mono, serif",
  },
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <InitiativeCalculator />
    </ThemeProvider>
  );
}

export default App;
