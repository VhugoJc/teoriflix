import React from "react";
import Head from "next/head";

export default function Seo(props) {
  const { title, description, img } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:image"   content={img}/>
    </Head>
  );
}

Seo.defaultProps = {
  title: "Teoriflix",
  description:
    "Proyecto de teoría computacional de la universidad politécnica de San Luis Potosí",
    img:"https://teoriflix.netlify.app/img/teoriflix-logo.png",
};