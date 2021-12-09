import Link from 'next/link';
import {Image} from 'antd';
const HeaderLogin = () => {
    return (  
       <div className="header-login">
           <Link href="/"><a><Image preview={false}  className="header-login__logo" src="/img/teoriflix-logo.png"/></a></Link>
       </div>
    );
}
 
export default HeaderLogin;