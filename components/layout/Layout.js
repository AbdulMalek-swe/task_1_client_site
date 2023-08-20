import Link from "next/link";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import store from "@/rtk/store";
import { addUserActions } from "@/rtk/userSlice/addUserSlice";
import { toast } from "react-toastify";
import { addProductActions } from "@/rtk/productSlice/productSlice";

const drawerWidth = 240;
function Layout({ children, props }) {
  const window = props;
  const [cookies] = useCookies(['token']);
  const token = cookies['token'];
  let router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const state = useSelector(state=>state?.reducer.User?.UserData)
  console.log(state);
  // find the page latest endpoint name
  const pathName = router.pathname.substring(router.pathname.lastIndexOf("/") + 1)
 let dashboardHead = "Stock"
 let roleBaseDashBoard = "user/User";
 if(pathName==="Admin"){
   dashboardHead = "Admin Dashboard"
 }
 if(pathName==="User"){
  dashboardHead = "User Dashboard"
 }
 if(state?.role==="admin"){
  roleBaseDashBoard = "admin/Admin"
 }
 if(state?.role==="user"){
  roleBaseDashBoard = "user/User"
 }
  

  const data = [
    {
      path: `/dashboard/${roleBaseDashBoard}`,
      content: "Dashboard",
      icon: "/home-trend-up.svg"
    },
    {
      path: "/",
      content: "stock",
      icon: "/status-up.svg"
    },
    {
      path: "/",
      content: "notification",
      icon: "/notification-circle.svg"
    },
  ];
  const data1 = [
    {
      path: `/profile`,
      content: "Profile",
      icon: "/profile.svg"
    },
    {
      path: "/",
      content: "settings",
      icon: "/setting.svg"
    },
  ]
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [,,removeCookie] = useCookies(["token"])
   const logout = async ()=>{
    store.dispatch(addUserActions.removeUser());
    store.dispatch(addProductActions.removeProduct());
    removeCookie("token", { path: "/" });
    toast.success("successfully log out")
   }
  const drawer = (
    <div>
      <img src="/Logo.svg" alt='loading...' className='w-full h-16 mt-6 mb-8' />
      <List>
       
          <div className='flex items-center justify-between uppercase text-gray-400 mx-3'>
            <div className="text-sm"> business</div>
            <div>
            <Image src='/add.svg'   width={30} height={30} className="bg-gray-200 filter saturate-0 hover:saturate-100"
             alt="loading..."  />
            </div>
          </div>
       
        {data.map(({ path, content, icon }, index) =>
          <Link href={path} key={index}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Image src={icon} alt="loading..." width={20} height={100}   />
                </ListItemIcon>
                <ListItemText primary={content} className="-ml-7 mt-2  capitalize" />
              </ListItemButton>
            </ListItem></Link>
        )}
      </List>
      <div className='flex items-center justify-between uppercase text-gray-400 mx-3'>
            <div className="text-sm"> settings</div>
            
          </div>
      <List>
      {data1.map(({ path, content, icon }, index) =>
          <Link href={path} key={index}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Image src={icon} alt="loading..." width={20} height={100}   />
                </ListItemIcon>
                <ListItemText primary={content} className="-ml-7 mt-2  capitalize" />
              </ListItemButton>
            </ListItem></Link>
        )}
      </List>
      {/* logout code here  */}
      <button  onClick={logout} >
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Image src="/export.svg" alt="loading..." width={20} height={100}   />
                </ListItemIcon>
                <ListItemText primary="logout" className="-ml-7 mt-2  capitalize" />
              </ListItemButton>
            </ListItem></button>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, boxShadow: "0px 0px 0px red",

        }}
        className=' border border-b-gray-300/80 bg-white text-black py-4'
      >
        <Toolbar  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <h1 className="-ml-2 xl:text2xl md:text-xl text-lg  w-1/2"> {dashboardHead} </h1>
          <div className='w-full flex justify-end items-center'>
            { state?.email && <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>}
          {  !state?.email && <div className='mx-2 text-center'>
              <Link href="/userForm/Login">Log in</Link>
            </div>}
            { state?.email && <div className='mx-2 text-left'>
              <p className="xl:text-lg text-base">{state?.fullName}</p>
              <span className="lg:text-base text-xs"> {state?.email}</span>
            </div>}
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, mt: 5, ml: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
       
        <div className="flex justify-between">
        <p className="text-base text-gray-400 py-5 ">Copyright © 2077 Logobly. All rights reserved.</p>
          <p className="text-base text-gray-400 py-5 ">Ver.2U1X1F1B1WA</p>
        </div>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
   
  window: PropTypes.func,
};

export default Layout;
