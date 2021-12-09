import HeaderLogin from '../HeaderLogin';
import LoginForm from './LoginForm';
const Login = () => {
    return (  
        <div className="login">
            <div className="login-darkbg"/>
            <div className="login-content">
                <HeaderLogin/>
                <LoginForm/>
            </div>
        </div>
    );
}
 
export default Login;