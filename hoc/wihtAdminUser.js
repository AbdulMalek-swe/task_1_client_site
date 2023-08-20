import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

const withAuthUser = (WrappedComponent) => {
  const HOCComponent = (props) => {
    const router = useRouter();
    const state = useSelector((state) => state?.reducer?.User.UserData);
    const [cookie] = useCookies(["token"])
    const token = cookie["token"];
    useEffect(() => {
       if (state?.role === 'admin') {
        router.push('/dashboard/admin/Admin');
      } else if (state?.role === 'user') {
        router.push('/dashboard/user/User');
      }
      else if(!token){
        router.push('/');
      }
    }, [state?.role]);

    // Return the wrapped component if we have user data
    return state?.role ? <WrappedComponent {...props} /> : null;
  };

  return HOCComponent;
};

export default withAuthUser;