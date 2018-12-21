import React from 'react';
import iconSvg from '../icons/normalized/cart-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cart-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender