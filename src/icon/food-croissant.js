import React from 'react';
import iconSvg from '../icons/normalized/food-croissant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__food-croissant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender