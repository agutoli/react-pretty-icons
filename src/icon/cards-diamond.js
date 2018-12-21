import React from 'react';
import iconSvg from '../icons/normalized/cards-diamond.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cards-diamond" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender