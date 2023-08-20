import DashBoardHome from "@/components/dashboard/dashboard/DashBoard";
import Layout from "@/components/layout/Layout";
import withAuthUser from "@/hoc/wihtAdminUser";
import Head from "next/head";
const User = () => {
    return (
       <>
        <Head>
        <title>User Dashboard</title>
     </Head>
   <Layout>
        <DashBoardHome/>
    </Layout>
       </>
    );
};

export default  withAuthUser(User) 