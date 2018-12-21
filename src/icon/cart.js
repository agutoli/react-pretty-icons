import React from 'react';
import iconSvg from '../icons/normalized/cart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender