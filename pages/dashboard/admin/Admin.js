 
import DashBoardHome from '@/components/dashboard/dashboard/DashBoard';
import Layout from '@/components/layout/Layout';
import withAuthUser from '@/hoc/wihtAdminUser';
import Head from 'next/head';
 
const Admin = () => {
    return (
       <>
         <Head>
            <title>Admin Dashboard</title>
         </Head>
          <Layout>
            <DashBoardHome/>
        </Layout>
       </>
    );
};

export default withAuthUser(Admin);