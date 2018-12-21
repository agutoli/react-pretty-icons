import React from 'react';
import iconSvg from '../icons/normalized/cart-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cart-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender