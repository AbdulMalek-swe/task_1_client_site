
import Layout from '@/components/layout/Layout';
import store from '@/rtk/store';
import { addUserActions } from '@/rtk/userSlice/addUserSlice';
import '@/styles/globals.css'
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from '../utils/axios';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
export default function App({ Component, pageProps }) {
  const [,,removeCookie] = useCookies("token")
  useEffect(() => {
    async function getProfile(){
      try {
        const res = await axios.get("/get-me")
        const {status,data} = res;
        if(status===200){
          store.dispatch(addUserActions.addUser(data?.result))
        } 
      } catch (error) {
        store.dispatch(addUserActions.removeUser());
        removeCookie("token", { path: "/" });
      }
    }
   getProfile()
  }, [])
  const theme = createTheme({

  });
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  )
}
