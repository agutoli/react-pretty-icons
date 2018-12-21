import React from 'react';
import iconSvg from '../icons/normalized/cards.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cards" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender