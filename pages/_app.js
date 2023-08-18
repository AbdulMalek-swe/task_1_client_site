 
import Layout from '@/components/layout/Layout';
import '@/styles/globals.css'
import { CssBaseline } from '@mui/material';
 
import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  ) 
}
