import React,{useEffect, useState} from 'react';
import {Image} from 'antd';
import {Button} from 'antd';
import {InfoCircleOutlined,CaretRightOutlined} from '@ant-design/icons';

const BannerHome = () => {
    const [numRand, setnumRand] = useState();
    useEffect(()=>{
        setnumRand(Math.floor(Math.random()*4+1));
        
    },[])
    return (  
        <div className="banner-home"  
        style={numRand ?{backgroundImage: `url(/img/netflix_bg_banner${numRand}.jpg)` } :{}}
        >
        <div className="banner-home__dark"/>
        <div className="banner-home__content">
            <Image alt="" preview={false} className="banner-home__logo" src="/img/logo_banner.png"/>
            <h3>
                En este drama tres estudiantes de ingeniería
                en Tecnologías de la información 
                buscan sacar 10 en su calificación final
                de Teoría Computacional.
            </h3>
            <Button className="banner-home__content-play"><CaretRightOutlined />Reproducir</Button>
            &nbsp;
            &nbsp; 
            <Button className="banner-home__content-info"><InfoCircleOutlined />Más infromación</Button>
        </div>

        </div>
    );
}
 
export default BannerHome;