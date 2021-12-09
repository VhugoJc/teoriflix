import React from 'react';
import IconArrowDown from './../Icons/IconArrowDown'
import Link from 'next/link';

const ShowDetailsButton = ({ onClick, section }) => (
  <Link href={`#${section}`}>  
  <a>
    <button onClick={onClick} className="show-details-button">
      <span>
        <IconArrowDown />
      </span>
    </button>
  </a>
  </Link>
);

export default ShowDetailsButton;
