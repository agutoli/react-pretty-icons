import React from 'react';
import iconSvg from '../icons/normalized/cart-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cart-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender