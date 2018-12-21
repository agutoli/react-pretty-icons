import React from 'react';
import iconSvg from '../icons/normalized/cards-spade.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cards-spade" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender