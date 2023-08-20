import UserForm from "@/components/userForm/UserForm";
import withPublic from "@/hoc/withPublic";
const Login = () => {
    return (<UserForm/>);
};

export default withPublic(Login);