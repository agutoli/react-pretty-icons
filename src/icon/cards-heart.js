import React from 'react';
import iconSvg from '../icons/normalized/cards-heart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cards-heart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender