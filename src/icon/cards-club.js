import React from 'react';
import iconSvg from '../icons/normalized/cards-club.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cards-club" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender