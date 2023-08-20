import UserForm from "@/components/userForm/UserForm";
import withPublic from "@/hoc/withPublic";

const Register = () => {
    return (<UserForm/>
    );
};

export default  withPublic(Register);