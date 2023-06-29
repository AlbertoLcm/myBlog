import AppRouter from "./routes/AppRouter";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
