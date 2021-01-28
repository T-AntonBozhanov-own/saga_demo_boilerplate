import React from 'react';

const Card = ({ id, thumbnailUrl, title }) => (
  <div>
    <figure>
      <p>
        <img src={thumbnailUrl} alt={id} />
      </p>
      <figcaption>{title}</figcaption>
    </figure>
  </div>
);

export default Card;
