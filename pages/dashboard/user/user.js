 
import DashBoardHome from "@/components/dashboard/dashboard/dashBoard";
import Layout from "@/components/layout/Layout";
import withAuthUser from "@/hoc/wihtAdminUser";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const user = () => {
    
    return (
   
       <Layout>  <DashBoardHome/> </Layout>
 
    );
};

export default  withAuthUser(user) 