import React from 'react';
import iconSvg from '../icons/normalized/food-fork-drink.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__food-fork-drink" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender