import React from 'react';
import iconSvg from '../icons/normalized/shopping-cart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shopping-cart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender