import React from 'react';
import iconSvg from '../icons/normalized/food-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__food-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender