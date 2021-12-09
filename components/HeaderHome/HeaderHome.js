import Link from 'next/link';
import {Menu} from 'antd';
import {Image} from 'antd';
import {SearchOutlined, BellFilled} from '@ant-design/icons';
const HeaderHome = ({user, menuBlack}) => {
    return (  
        <div className="menu" style={menuBlack ?{backgroundColor:"black"} :null} >
            <div className="left">
            <Menu mode="horizontal" className="header"> 
                
            <Menu.Item key={1}>
            <Link href="/"><a><Image  preview={false} className="header__logo" src="/img/teoriflix-logo.png"/></a></Link>
            </Menu.Item>
            <Menu.Item  key={2}>
                <Link href="#home"><a><h4 className="selected">Inicio</h4></a></Link>
            </Menu.Item>
            <Menu.Item key={3}>
                <Link href="#section1"><a><h4>Parcial 1</h4></a></Link>
            </Menu.Item>
            <Menu.Item key={4}>
                <Link href="#section2"><a><h4>Parcial 2</h4></a></Link>
            </Menu.Item>
            <Menu.Item key={5}>
                <Link href="#section3"><a><h4>Parcial 3</h4></a></Link>
            </Menu.Item>
{/*
            <Menu.Item key={6}>
                <h4>Mi lista</h4>
            </Menu.Item>
            <Menu.Item key={7}>
                <h4>Ver de nuevo</h4>
            </Menu.Item>
*/}
            </Menu>
            </div>
            <div className="right">
            <Menu className="header" mode="horizontal">
            <Menu.Item key={8}>
                <h4><SearchOutlined /></h4>
                </Menu.Item>
                <Menu.Item key={9}>
                    <h4><BellFilled /></h4>
                </Menu.Item>
                <Menu.Item key={10}>
                    <Image  preview={false} className="header__img" src={user.img}/>
                </Menu.Item>
            </Menu>
            </div>
        </div>
    );
}
 
export default HeaderHome;