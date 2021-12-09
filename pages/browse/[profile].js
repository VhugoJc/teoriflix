import React from 'react';
import { useEffect, useState, Component } from "react";
import { useRouter } from "next/router";
import HeaderHome from "../../components/HeaderHome";
import BannerHome from "../../components/BannerHome/BannerHome";
import Slider from "../../components/NetflixSlider";
import data from '../../assets/json/DataItems.json';
import Seo from "../../components/Seo";

const Profile = () => {
    const { query } = useRouter();
    const [profile, setprofile] = useState({});
    const [menuBlack, setmenuBlack] = useState(false);
    const movies=data[0];
    const movies2=data[1];
    const movies3=data[2];
    
    useEffect(()=>{
        setprofile({
            name: query.profile,
            img: `/img/${query.profile}.jpg`
        });
    },[query]);

    if (typeof window !== "undefined") {    
      const height = document.body.scrollHeight -1000;
      window.onscroll = function() {scrollFunction()};
      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              setmenuBlack(true);
          } else {
              setmenuBlack(false);    
          }
      }
  }

    return (  
        <>
        <Seo title="Teoriflix - Página de inicio" />
        <div id="home">
          <HeaderHome user={profile} menuBlack={menuBlack}/>
        </div>
        <BannerHome/>
        <div id="section1">
          <h2 className="subtitle">Primer Parcial</h2>
          <Slider>
            {movies.map(movie => (
              <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
            ))}
          </Slider>
          </div>
          <div id="section2">
          <h2 className="subtitle">Segundo Parcial</h2>
          <Slider>
            {movies2.map(movie => (
              <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
            ))}
          </Slider>
          </div>
          <div id="section3">
          <h2 className="subtitle">Parcial Parcial</h2>
          <Slider>
            {movies3.map(movie => (
              <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
            ))}
          </Slider>
          </div>
        </>
    );
}
 
export default Profile;