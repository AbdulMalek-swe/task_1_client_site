import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
  
import { useSelector } from "react-redux";

const withAuthUser = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter(); 
      const state = useSelector(state=>state.User.UserData)
      
      if(state?.role==='admin'){
        router.push("/dashboard/admin/admin");
        return null;
      }
      if(state?.role==='user'){
        router.push("/dashboard/user/user");
        return null;
      }
       
      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return <WrappedComponent {...props} />;
  };
};

export default withAuthUser;
