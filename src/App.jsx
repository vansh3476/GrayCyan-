import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import ProductBaseProperties from "./components/ProductBaseProperties";
import ProductTrackingDetails from "./components/ProductTrackingDetails";
import ProductMetadataAttributes from "./components/ProductMetadataAttributes";
import ProductDimensionAndPower from "./components/ProductDimensionAndPower";
import ProductFinancials from "./components/ProductFinancials";
import ProductVehicles from "./components/ProductVehicles";
import ProductAssetManagement from "./components/ProductAssetManagement";
import ProductAlternates from "./components/ProductAlternates";
import ProductAccessories from "./components/ProductAccessories";
import ProductOptions from "./components/ProductOptions";
import Layout from "./components/Layout";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark", 
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#1a1a1a",
      paper: "#1e1e2f",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Layout>
      <ProductBaseProperties />
      <ProductTrackingDetails />
      <ProductMetadataAttributes />
      <ProductDimensionAndPower />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <ProductFinancials />
        <ProductVehicles />
        <ProductAlternates />
        <ProductAccessories />
        <ProductOptions />
        <ProductAssetManagement />
      </Box>
    </Layout>
  </ThemeProvider>
);

export default App;
