import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
const withPublic = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter(); 
      const [cookies] = useCookies(['token']);
     const token = cookies['token'];
      if(token){
        router.push("/");
        return null;
      }
      return <WrappedComponent {...props} />;
    }
    // If we are on server, return null
    // return <WrappedComponent {...props} />;
    return <WrappedComponent {...props} />;
  };
};

export default withPublic;
