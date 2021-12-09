import React from 'react';
import IconCross from './../Icons/IconCross';
import {Button} from 'antd';
import {InfoCircleOutlined,CaretRightOutlined} from '@ant-design/icons';
import Link from 'next/link';

const Content = ({ movie, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${movie.image})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.title}</div>
        <div className="content__description">
          {movie.description}
          <br/>
          <br/>
          <Button href={movie.program} target="_blank"  disabled={movie.program===null ?true :false} className="content__content-play"><CaretRightOutlined />Reproducir</Button>
            &nbsp;
            &nbsp; 
            <Button href={movie.info} target="_blank"  className="content__content-info"><InfoCircleOutlined />Más infromación</Button>
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
