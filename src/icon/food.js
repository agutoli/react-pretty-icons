import React from 'react';
import iconSvg from '../icons/normalized/food.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__food" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender