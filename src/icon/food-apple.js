import React from 'react';
import iconSvg from '../icons/normalized/food-apple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__food-apple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender