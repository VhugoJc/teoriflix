import Link from 'next/link';
import {Card, Input, Button} from 'antd';
import {Image} from 'antd';
const LoginForm = () => {
    return (  
        <div className="login-form">
            <Card className="login-form__card">
                <h1 className="login-form__card-title">Inicia sesión</h1>    
                <Input className="login-form__card-input" placeholder="Email o número de telefono" />
                <Input type="password" className="login-form__card-input" placeholder="Contraseña" />
                <Link href="/profile"><a><Button  className="login-form__card-btn"><h3>Iniciar sesión</h3></Button></a></Link>
                <h4 className="login-form__card-sm">
                    <Image preview={false} className="login-form__card-sm__img" src="/img/facebook.png"/>
                    &nbsp; &nbsp; Iniciar sesión con Facebook
                </h4>
                <h3>
                    <span className="login-form__card-subs">¿Primera vez? </span>Suscríbete ya
                </h3>
            </Card>
        </div>
    );
}
 
export default LoginForm;